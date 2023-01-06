/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InstantAppsPopovers } from "./components/instant-apps-popovers/instant-apps-popovers";
import { LogicalPlacement } from "@esri/calcite-components/dist/types/utils/floating-ui";
import { InstantAppsPopoverMessageOverrides } from "./interfaces/interfaces";
export namespace Components {
    interface InstantAppsHeader {
        /**
          * Background color to display in header - accepts a hexidecimal value i.e. `#000000`.
         */
        "backgroundColor": string;
        /**
          * CSS styles to be used in conjuction with `custom-header-html`.
         */
        "customHeaderCss": string;
        /**
          * HTML code for custom headers.
         */
        "customHeaderHtml": string;
        /**
          * Font family to use for text
         */
        "fontFamily": string;
        /**
          * Display info button at the end of the title.
         */
        "infoButton": boolean;
        /**
          * Keeps track of the info 'open' state
         */
        "infoIsOpen": boolean;
        /**
          * Image URL for logo. Displays at the start of the header.
         */
        "logoImage": string;
        /**
          * Alternate text for header logo.
         */
        "logoImageAltText": string;
        /**
          * Logo URL to link out to another page.
         */
        "logoLink": string;
        /**
          * Adjusts scale of logo image.
         */
        "logoScale": 's' | 'm' | 'l';
        /**
          * Mobile breakpoint value in pixels(px).
         */
        "mobileWidthBreakpoint": number;
        /**
          * Text color to display in header - accepts a hexidecimal value i.e. `#FFFFFF`.
         */
        "textColor": string;
        /**
          * Main text to display in header.
         */
        "titleText": string;
    }
    interface InstantAppsKeyboardShortcuts {
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
        "view": __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsPopover {
        "content": string;
        "disableAction": boolean;
        "imgAlt": string;
        "imgSrc": string;
        "index": number;
        "mediaSrc": string;
        "messageOverrides": InstantAppsPopoverMessageOverrides;
        "pagination": boolean;
        "parent": InstantAppsPopovers;
        "placement": LogicalPlacement;
        "popoverAction": (event: MouseEvent) => void;
        "popoverTitle": string;
        "refId": string;
        "referenceElement": string | HTMLElement;
        "subtitle": string;
    }
    interface InstantAppsPopovers {
        "beforeOpen": () => Promise<void>;
        "beginTour": () => Promise<void>;
        "close": (key: string) => Promise<void>;
        "currentId": string;
        "endTour": () => Promise<void>;
        "inTour": boolean;
        "instantAppsPopovers": Map<string, HTMLInstantAppsPopoverElement>;
        "open": (key: string) => Promise<void>;
    }
    interface InstantAppsSocialShare {
        /**
          * Auto update share URL.
         */
        "autoUpdateShareUrl": boolean;
        /**
          * Configure the default URL parameters that are appended to the generated share URL.
         */
        "defaultUrlParams": { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        /**
          * Show/hide the tip text below the share options.
         */
        "displayTipText": boolean;
        /**
          * Show/hide the embed UI.
         */
        "embed": boolean;
        /**
          * Text to nest in embed iframe code.
         */
        "iframeInnerText": string;
        /**
          * Configures the placement of the success message popover for the 'Copy Link' button. See options here: https://github.com/Esri/calcite-components/blob/v1.0.0-beta.83/src/utils/popper.ts#L34
         */
        "inlineSuccessPopoverPlacement": LogicalPlacement;
        /**
          * Renders tool as a popover with a trigger button, or inline to place in a custom container.
         */
        "mode": 'popover' | 'inline';
        /**
          * Adjusts the scale of the popover button icon.
         */
        "popoverButtonIconScale": 's' | 'm' | 'l';
        /**
          * Adjusts the scale of the component.
         */
        "scale": 's' | 'm' | 'l';
        "shareButtonColor": 'inverse' | 'neutral';
        /**
          * Display the share icons in a vertical or horizontal layout.
         */
        "shareIconsLayout": 'vertical' | 'horizontal';
        "shareText": string;
        /**
          * Generated share URL. Use this property to append custom URL parameters if needed.
         */
        "shareUrl": string;
        /**
          * Shortens generated URL.
         */
        "shortenShareUrl": boolean;
        /**
          * Show/hide social media icons.
         */
        "socialMedia": boolean;
        /**
          * Provides an alternate to the success.url message "App URL copied to clipboard."
         */
        "successMessage": string;
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
        "view": __esri.MapView | __esri.SceneView;
    }
}
export interface InstantAppsHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInstantAppsHeaderElement;
}
declare global {
    interface HTMLInstantAppsHeaderElement extends Components.InstantAppsHeader, HTMLStencilElement {
    }
    var HTMLInstantAppsHeaderElement: {
        prototype: HTMLInstantAppsHeaderElement;
        new (): HTMLInstantAppsHeaderElement;
    };
    interface HTMLInstantAppsKeyboardShortcutsElement extends Components.InstantAppsKeyboardShortcuts, HTMLStencilElement {
    }
    var HTMLInstantAppsKeyboardShortcutsElement: {
        prototype: HTMLInstantAppsKeyboardShortcutsElement;
        new (): HTMLInstantAppsKeyboardShortcutsElement;
    };
    interface HTMLInstantAppsPopoverElement extends Components.InstantAppsPopover, HTMLStencilElement {
    }
    var HTMLInstantAppsPopoverElement: {
        prototype: HTMLInstantAppsPopoverElement;
        new (): HTMLInstantAppsPopoverElement;
    };
    interface HTMLInstantAppsPopoversElement extends Components.InstantAppsPopovers, HTMLStencilElement {
    }
    var HTMLInstantAppsPopoversElement: {
        prototype: HTMLInstantAppsPopoversElement;
        new (): HTMLInstantAppsPopoversElement;
    };
    interface HTMLInstantAppsSocialShareElement extends Components.InstantAppsSocialShare, HTMLStencilElement {
    }
    var HTMLInstantAppsSocialShareElement: {
        prototype: HTMLInstantAppsSocialShareElement;
        new (): HTMLInstantAppsSocialShareElement;
    };
    interface HTMLElementTagNameMap {
        "instant-apps-header": HTMLInstantAppsHeaderElement;
        "instant-apps-keyboard-shortcuts": HTMLInstantAppsKeyboardShortcutsElement;
        "instant-apps-popover": HTMLInstantAppsPopoverElement;
        "instant-apps-popovers": HTMLInstantAppsPopoversElement;
        "instant-apps-social-share": HTMLInstantAppsSocialShareElement;
    }
}
declare namespace LocalJSX {
    interface InstantAppsHeader {
        /**
          * Background color to display in header - accepts a hexidecimal value i.e. `#000000`.
         */
        "backgroundColor"?: string;
        /**
          * CSS styles to be used in conjuction with `custom-header-html`.
         */
        "customHeaderCss"?: string;
        /**
          * HTML code for custom headers.
         */
        "customHeaderHtml"?: string;
        /**
          * Font family to use for text
         */
        "fontFamily"?: string;
        /**
          * Display info button at the end of the title.
         */
        "infoButton"?: boolean;
        /**
          * Keeps track of the info 'open' state
         */
        "infoIsOpen"?: boolean;
        /**
          * Image URL for logo. Displays at the start of the header.
         */
        "logoImage"?: string;
        /**
          * Alternate text for header logo.
         */
        "logoImageAltText"?: string;
        /**
          * Logo URL to link out to another page.
         */
        "logoLink"?: string;
        /**
          * Adjusts scale of logo image.
         */
        "logoScale"?: 's' | 'm' | 'l';
        /**
          * Mobile breakpoint value in pixels(px).
         */
        "mobileWidthBreakpoint"?: number;
        /**
          * Fires when the info button is clicked.
         */
        "onInfoIsOpenChanged"?: (event: InstantAppsHeaderCustomEvent<boolean>) => void;
        /**
          * Text color to display in header - accepts a hexidecimal value i.e. `#FFFFFF`.
         */
        "textColor"?: string;
        /**
          * Main text to display in header.
         */
        "titleText"?: string;
    }
    interface InstantAppsKeyboardShortcuts {
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsPopover {
        "content"?: string;
        "disableAction"?: boolean;
        "imgAlt"?: string;
        "imgSrc"?: string;
        "index"?: number;
        "mediaSrc"?: string;
        "messageOverrides"?: InstantAppsPopoverMessageOverrides;
        "pagination"?: boolean;
        "parent"?: InstantAppsPopovers;
        "placement"?: LogicalPlacement;
        "popoverAction"?: (event: MouseEvent) => void;
        "popoverTitle"?: string;
        "refId"?: string;
        "referenceElement"?: string | HTMLElement;
        "subtitle"?: string;
    }
    interface InstantAppsPopovers {
        "beforeOpen"?: () => Promise<void>;
        "currentId"?: string;
        "inTour"?: boolean;
        "instantAppsPopovers"?: Map<string, HTMLInstantAppsPopoverElement>;
    }
    interface InstantAppsSocialShare {
        /**
          * Auto update share URL.
         */
        "autoUpdateShareUrl"?: boolean;
        /**
          * Configure the default URL parameters that are appended to the generated share URL.
         */
        "defaultUrlParams"?: { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        /**
          * Show/hide the tip text below the share options.
         */
        "displayTipText"?: boolean;
        /**
          * Show/hide the embed UI.
         */
        "embed"?: boolean;
        /**
          * Text to nest in embed iframe code.
         */
        "iframeInnerText"?: string;
        /**
          * Configures the placement of the success message popover for the 'Copy Link' button. See options here: https://github.com/Esri/calcite-components/blob/v1.0.0-beta.83/src/utils/popper.ts#L34
         */
        "inlineSuccessPopoverPlacement"?: LogicalPlacement;
        /**
          * Renders tool as a popover with a trigger button, or inline to place in a custom container.
         */
        "mode"?: 'popover' | 'inline';
        /**
          * Adjusts the scale of the popover button icon.
         */
        "popoverButtonIconScale"?: 's' | 'm' | 'l';
        /**
          * Adjusts the scale of the component.
         */
        "scale"?: 's' | 'm' | 'l';
        "shareButtonColor"?: 'inverse' | 'neutral';
        /**
          * Display the share icons in a vertical or horizontal layout.
         */
        "shareIconsLayout"?: 'vertical' | 'horizontal';
        "shareText"?: string;
        /**
          * Generated share URL. Use this property to append custom URL parameters if needed.
         */
        "shareUrl"?: string;
        /**
          * Shortens generated URL.
         */
        "shortenShareUrl"?: boolean;
        /**
          * Show/hide social media icons.
         */
        "socialMedia"?: boolean;
        /**
          * Provides an alternate to the success.url message "App URL copied to clipboard."
         */
        "successMessage"?: string;
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface IntrinsicElements {
        "instant-apps-header": InstantAppsHeader;
        "instant-apps-keyboard-shortcuts": InstantAppsKeyboardShortcuts;
        "instant-apps-popover": InstantAppsPopover;
        "instant-apps-popovers": InstantAppsPopovers;
        "instant-apps-social-share": InstantAppsSocialShare;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "instant-apps-header": LocalJSX.InstantAppsHeader & JSXBase.HTMLAttributes<HTMLInstantAppsHeaderElement>;
            "instant-apps-keyboard-shortcuts": LocalJSX.InstantAppsKeyboardShortcuts & JSXBase.HTMLAttributes<HTMLInstantAppsKeyboardShortcutsElement>;
            "instant-apps-popover": LocalJSX.InstantAppsPopover & JSXBase.HTMLAttributes<HTMLInstantAppsPopoverElement>;
            "instant-apps-popovers": LocalJSX.InstantAppsPopovers & JSXBase.HTMLAttributes<HTMLInstantAppsPopoversElement>;
            "instant-apps-social-share": LocalJSX.InstantAppsSocialShare & JSXBase.HTMLAttributes<HTMLInstantAppsSocialShareElement>;
        }
    }
}
