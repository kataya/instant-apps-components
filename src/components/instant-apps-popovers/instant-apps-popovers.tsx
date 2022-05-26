import { Component, Host, h, Prop, Element, State, Method } from '@stencil/core';

@Component({
  tag: 'instant-apps-popovers',
  styleUrl: 'instant-apps-popovers.scss',
  shadow: true,
})
export class InstantAppsPopovers {
  @State()
  currentId: string;

  @Element()
  host: HTMLElement;

  @Prop()
  instantAppsPopovers: Map<string, HTMLInstantAppsPopoverElement> = new Map();

  @Prop({
    reflect: true,
  })
  pagination: boolean = false;

  @Prop() beforeOpen: () => Promise<void> = () => Promise.resolve();

  componentWillLoad() {
    const popovers = Array.from(this.host.querySelector("[slot='popovers']")?.children as HTMLCollection) as HTMLInstantAppsPopoverElement[];
    popovers.forEach((popover, popoverIndex) => {
      const refId = popover.getAttribute('ref-id') as string;
      popover.parent = this;
      popover.index = popoverIndex;
      this.instantAppsPopovers.set(refId, popover);
    });
    this.host.addEventListener('calcitePopoverOpen', e => {
      const node = e.target as HTMLCalcitePopoverElement;
      const refId = node.getAttribute('ref-id') as string;
      this.currentId = refId;
    });
  }

  render() {
    return (
      <Host>
        <slot name="popovers"></slot>
      </Host>
    );
  }

  next(): void {
    const refIds = Array.from(this.instantAppsPopovers.keys());
    const index = refIds.indexOf(this.currentId) + 1;
    const nextId = refIds[index];
    this.close(this.currentId);
    this.open(nextId);
  }

  previous(): void {
    const refIds = Array.from(this.instantAppsPopovers.keys());
    const index = refIds.indexOf(this.currentId) - 1;
    const previousId = refIds[index];
    this.close(this.currentId);
    this.open(previousId);
  }

  done(): void {
    this.close(this.currentId);
    this.endTour();
  }

  @Method()
  async open(key: string): Promise<void> {
    return this.beforeOpen().then(() => {
      const popover = this.instantAppsPopovers.get(key)?.firstElementChild as HTMLCalcitePopoverElement;
      popover.toggle(true);
    });
  }

  @Method()
  async close(key: string): Promise<void> {
    const popover = this.instantAppsPopovers.get(key)?.firstElementChild as HTMLCalcitePopoverElement;
    popover.toggle(false);
  }

  @Method()
  async beginTour(): Promise<void> {
    this.pagination = true;
    const scrim = document.createElement('calcite-scrim');
    scrim.id = 'instantAppsPopoverScrim';
    document.body.appendChild(scrim);
    const refIds = Array.from(this.instantAppsPopovers.keys());
    this.open(refIds[0]);
  }

  @Method()
  async endTour(): Promise<void> {
    const scrim = document.getElementById('instantAppsPopoverScrim');
    scrim?.remove();
    this.pagination = false;
  }
}
