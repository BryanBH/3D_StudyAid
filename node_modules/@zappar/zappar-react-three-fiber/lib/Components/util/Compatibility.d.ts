/// <reference types="react" />
import { Props } from "../../spec";
/**
 * Shows a full-page dialog that informs the user they're using an unsupported browser,
 * and provides a button to 'copy' the current page URL so they can 'paste' it into the
 * address bar of a compatible alternative.
 */
declare const compatibility: (props: Props.browserCompatibility) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export default compatibility;
