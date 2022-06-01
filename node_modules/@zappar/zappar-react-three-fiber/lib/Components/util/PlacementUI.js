"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const drei_1 = require("@react-three/drei");
const style = {
    position: "absolute",
    bottom: "5%",
    width: "200px",
    left: "calc(50% - 100px)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    textAlign: "center",
    fontFamily: "sans-serif",
    padding: "10px",
    userSelect: "none",
    borderRadius: "5px",
};
/**
 * Renders a button which toggles the current placementMode.
 */
function PlacementUI({ onInteract, placementType }) {
    const [placementMode, setPlacementMode] = (0, react_1.useState)(true);
    const [ready, setReady] = (0, react_1.useState)(false);
    (0, react_1.useLayoutEffect)(() => {
        onInteract(placementMode);
    }, [placementMode]);
    (0, react_1.useEffect)(() => {
        setReady(true);
    }, []);
    if (!ready)
        return null;
    if (placementType === "placement-only" && !placementMode)
        return null;
    return (react_1.default.createElement(drei_1.Html, { fullscreen: true, style: { left: "0px", top: "0px" } },
        react_1.default.createElement("div", { style: { width: "100%", height: "100%", position: "absolute", backgroundColor: "rgba(0, 0, 0, 0.1)" } },
            react_1.default.createElement("div", { id: "ZapparPlacementUIHelper", role: "button", style: style, tabIndex: 0, onKeyPress: () => {
                    setPlacementMode((currentPlacementMode) => !currentPlacementMode);
                }, onClick: () => {
                    setPlacementMode((currentPlacementMode) => !currentPlacementMode);
                } },
                "Tap here to",
                placementMode ? " place " : " pick up ",
                "the object"))));
}
exports.default = PlacementUI;
