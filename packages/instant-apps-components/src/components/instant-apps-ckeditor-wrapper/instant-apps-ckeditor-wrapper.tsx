import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { styles } from './support/constants';

import ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

const CKEDITOR_STYLES_ID = 'instant-apps-components__ckeditor-wrapper';

import { GetCallback, BaseEvent } from '@ckeditor/ckeditor5-utils/src/emittermixin';

@Component({
  tag: 'instant-apps-ckeditor-wrapper',
  styleUrl: 'instant-apps-ckeditor-wrapper.scss',
})
export class InstantAppsCkeditorWrapper {
  @Element()
  el: HTMLElement;

  /**
   * Current value of text editor instance.
   */
  @Prop({
    mutable: true,
  })
  value: string;

  /**
   * Instance of text editor
   */
  @Prop({
    mutable: true,
  })
  editorInstance;

  @Watch('value')
  updateValue(): void {
    if (this.value) this.editorInstance.setData(this.value);
  }

  @Event()
  isFocused: EventEmitter<{ fieldName: string; isFocused: boolean }>;

  @Event()
  dataChanged: EventEmitter<string>;

  async componentDidLoad() {
    this.init();
  }

  render() {
    return (
      <Host>
        <div />
      </Host>
    );
  }

  init(): void {
    this.applyStyles();
    this.initEditor();
  }

  applyStyles(): void {
    const exists = !!document.getElementById(CKEDITOR_STYLES_ID);
    if (exists) return;
    const style = document.createElement('style') as HTMLStyleElement;
    style.id = CKEDITOR_STYLES_ID;
    style.innerHTML = styles;
    document.head.prepend(style);
  }

  async initEditor(): Promise<void> {
    const editor = await this.createEditor();
    if (editor) {
      this.editorInstance = editor;
      if (this.value) editor.setData(this.value);
      editor.editing.view.document.on('change:isFocused', this.getEditorFocusedCallback(editor));
    }
  }

  async createEditor(): Promise<ClassicEditorBuild | null> {
    try {
      const config = { toolbar: [] };
      const editor = await ClassicEditorBuild.create(this.el, config);
      this.editorInstance = editor;
      return Promise.resolve(editor);
    } catch {
      return Promise.reject(null);
    }
  }

  getEditorFocusedCallback(editor: ClassicEditor): GetCallback<BaseEvent> {
    return (_event, _name, _isFocused) => {
      if (!_isFocused) {
        const editorData = editor.getData();
        if (this.value !== editorData) {
          this.value = editorData;
          this.dataChanged.emit(editorData);
        }
      } else {
        this.isFocused.emit();
      }
    };
  }
}
