# instant-apps-social-share

<!-- Auto Generated Below -->


## Properties

| Property                        | Attribute                          | Description                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                              | Default                |
| ------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `autoUpdateShareUrl`            | `auto-update-share-url`            | Auto update share URL.                                                                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                                         | `true`                 |
| `defaultUrlParams`              | --                                 | Configure the default URL parameters that are appended to the generated share URL.                                                                                                           | `null \| { center?: boolean \| undefined; level?: boolean \| undefined; viewpoint?: boolean \| undefined; selectedFeature?: boolean \| undefined; hiddenLayers?: boolean \| undefined; }`                                                                                                                         | `null`                 |
| `displayTipText`                | `display-tip-text`                 | Show/hide the tip text below the share options.                                                                                                                                              | `boolean`                                                                                                                                                                                                                                                                                                         | `true`                 |
| `embed`                         | `embed`                            | Show/hide the embed UI.                                                                                                                                                                      | `boolean`                                                                                                                                                                                                                                                                                                         | `false`                |
| `iframeInnerText`               | `iframe-inner-text`                | Text to nest in embed iframe code.                                                                                                                                                           | `string`                                                                                                                                                                                                                                                                                                          | `''`                   |
| `inlineSuccessPopoverPlacement` | `inline-success-popover-placement` | Configures the placement of the success message popover for the 'Copy Link' button. See options here: https://github.com/Esri/calcite-components/blob/v1.0.0-beta.83/src/utils/popper.ts#L34 | `"auto" \| "top" \| "right" \| "bottom" \| "left" \| "top-start" \| "top-end" \| "right-start" \| "right-end" \| "bottom-start" \| "bottom-end" \| "left-start" \| "left-end" \| "auto-start" \| "auto-end" \| "leading-start" \| "leading" \| "leading-end" \| "trailing-end" \| "trailing" \| "trailing-start"` | `'trailing'`           |
| `mode`                          | `mode`                             | Renders tool as a popover with a trigger button, or inline to place in a custom container.                                                                                                   | `"inline" \| "popover"`                                                                                                                                                                                                                                                                                           | `'popover'`            |
| `popoverButtonIconScale`        | `popover-button-icon-scale`        | Adjusts the scale of the popover button icon.                                                                                                                                                | `"l" \| "m" \| "s"`                                                                                                                                                                                                                                                                                               | `'m'`                  |
| `scale`                         | `scale`                            | Adjusts the scale of the component.                                                                                                                                                          | `"l" \| "m" \| "s"`                                                                                                                                                                                                                                                                                               | `'m'`                  |
| `shareButtonColor`              | `share-button-color`               |                                                                                                                                                                                              | `"inverse" \| "neutral"`                                                                                                                                                                                                                                                                                          | `'neutral'`            |
| `shareIconsLayout`              | `share-icons-layout`               | Display the share icons in a vertical or horizontal layout.                                                                                                                                  | `"horizontal" \| "vertical"`                                                                                                                                                                                                                                                                                      | `'vertical'`           |
| `shareText`                     | `share-text`                       |                                                                                                                                                                                              | `string`                                                                                                                                                                                                                                                                                                          | `''`                   |
| `shareUrl`                      | `share-url`                        | Generated share URL. Use this property to append custom URL parameters if needed.                                                                                                            | `string`                                                                                                                                                                                                                                                                                                          | `window.location.href` |
| `shortenShareUrl`               | `shorten-share-url`                | Shortens generated URL.                                                                                                                                                                      | `boolean`                                                                                                                                                                                                                                                                                                         | `true`                 |
| `socialMedia`                   | `social-media`                     | Show/hide social media icons.                                                                                                                                                                | `boolean`                                                                                                                                                                                                                                                                                                         | `true`                 |
| `successMessage`                | `success-message`                  | Provides an alternate to the success.url message "App URL copied to clipboard."                                                                                                              | `string`                                                                                                                                                                                                                                                                                                          | `''`                   |
| `view`                          | --                                 | MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.                                                                               | `MapView \| SceneView`                                                                                                                                                                                                                                                                                            | `undefined`            |


## CSS Custom Properties

| Name                                              | Description                                                                                 |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `--instant-apps-social-share-width--l`            | Width of component when scale is set to `l`                                                 |
| `--instant-apps-social-share-width--m`            | Width of component when scale is set to `m`                                                 |
| `--instant-apps-social-share-width--s`            | Width of component when scale is set to `s`                                                 |
| `--instant-apps-social-share-width-horizontal--l` | Width of component when `share-icons-layout` is set to `horizontal` and scale is set to 'l' |
| `--instant-apps-social-share-width-horizontal--m` | Width of component when `share-icons-layout` is set to `horizontal` and scale is set to 'm' |
| `--instant-apps-social-share-width-horizontal--s` | Width of component when `share-icons-layout` is set to `horizontal` and scale is set to 's' |


----------------------------------------------

## License
COPYRIGHT © 2023 Esri

All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.

This material is licensed for use under the Esri Master License Agreement (MLA), and is bound by the terms of that agreement. You may redistribute and use this code without modification, provided you adhere to the terms of the MLA and include this copyright notice.

See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english

For additional information, contact: Environmental Systems Research Institute, Inc. Attn: Contracts and Legal Services Department 380 New York Street Redlands, California, USA 92373 USA

email: contracts@esri.com
