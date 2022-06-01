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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ZapparThree = __importStar(require("@zappar/zappar-threejs"));
const react_1 = __importStar(require("react"));
const fiber_1 = require("@react-three/fiber");
const react_merge_refs_1 = __importDefault(require("react-merge-refs"));
const store_1 = __importDefault(require("../../store"));
const trackerEnabled_1 = __importDefault(require("../../hooks/trackerEnabled"));
const { ImageAnchorGroup } = ZapparThree;
(0, fiber_1.extend)({ ImageAnchorGroup });
/**
 * A THREE.Group that attaches content to a known image as it moves around in the camera view.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/image-tracking/
 */
const ZapparImageTracker = (0, react_1.forwardRef)((props, ref) => {
    const { useImageTracker, onNotVisible, onNewAnchor, onVisible, targetImage, camera, children, pipeline, enabled } = props;
    const imageTrackerGroupRef = (0, react_1.useRef)();
    const store = store_1.default.camera((state) => state);
    const zapparCamera = (camera === null || camera === void 0 ? void 0 : camera.current) ? camera.current : store.object;
    const [imageTracker, setImageTracker] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        setImageTracker(new ZapparThree.ImageTracker(targetImage, pipeline));
    }, [targetImage, pipeline]);
    (0, react_1.useEffect)(() => {
        if (imageTracker) {
            if (useImageTracker)
                useImageTracker(imageTracker);
            if (onNotVisible)
                imageTracker.onNotVisible.bind(onNotVisible);
            if (onNewAnchor)
                imageTracker.onNewAnchor.bind(onNewAnchor);
            if (onVisible)
                imageTracker.onVisible.bind(onVisible);
        }
        return () => {
            if (onNotVisible)
                imageTracker === null || imageTracker === void 0 ? void 0 : imageTracker.onNotVisible.unbind(onNotVisible);
            if (onNewAnchor)
                imageTracker === null || imageTracker === void 0 ? void 0 : imageTracker.onNewAnchor.unbind(onNewAnchor);
            if (onVisible)
                imageTracker === null || imageTracker === void 0 ? void 0 : imageTracker.onVisible.unbind(onVisible);
        };
    }, [useImageTracker, onVisible, onNewAnchor, onNotVisible, imageTracker]);
    (0, trackerEnabled_1.default)(imageTracker, enabled);
    if (!zapparCamera || !imageTracker)
        return null;
    return (react_1.default.createElement("imageAnchorGroup", Object.assign({ ref: (0, react_merge_refs_1.default)([imageTrackerGroupRef, ref]), args: [zapparCamera, imageTracker] }, props), children));
});
exports.default = ZapparImageTracker;
