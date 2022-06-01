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
const { FaceAnchorGroup } = ZapparThree;
(0, fiber_1.extend)({ FaceAnchorGroup });
/**
 * A THREE.Group which attaches content to a face as it moves around in the camera view.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/face-tracking/
 */
const ZapparFaceAnchorGroup = (0, react_1.forwardRef)((props, ref) => {
    const { camera, children, useFaceTracker, onNotVisible, onVisible, onNewAnchor, pipeline, model, enabled } = props;
    const [faceTracker, setFaceTracker] = (0, react_1.useState)();
    const faceAnchorGroupRef = react_1.default.useRef();
    const store = {
        camera: store_1.default.camera((state) => state),
        faceTracker: store_1.default.faceTracker((state) => state),
    };
    (0, react_1.useEffect)(() => {
        const ft = new ZapparThree.FaceTracker(pipeline);
        if (model) {
            ft.loadModel(model);
        }
        else {
            ft.loadDefaultModel();
        }
        setFaceTracker(ft);
        store.faceTracker.set(ft);
    }, [model, pipeline]);
    const zapparCamera = (camera === null || camera === void 0 ? void 0 : camera.current) ? camera.current : store.camera.object;
    (0, react_1.useEffect)(() => {
        if (faceTracker) {
            if (useFaceTracker)
                useFaceTracker(faceTracker);
            if (onNotVisible)
                faceTracker.onNotVisible.bind(onNotVisible);
            if (onVisible)
                faceTracker.onVisible.bind(onVisible);
            if (onNewAnchor)
                faceTracker.onVisible.bind(onNewAnchor);
        }
        return () => {
            if (faceTracker) {
                if (onNotVisible)
                    faceTracker.onNotVisible.unbind(onNotVisible);
                if (onVisible)
                    faceTracker.onVisible.unbind(onVisible);
                if (onNewAnchor)
                    faceTracker.onVisible.unbind(onNewAnchor);
            }
        };
    }, [useFaceTracker, onVisible, onNotVisible, faceAnchorGroupRef, faceTracker]);
    (0, trackerEnabled_1.default)(faceTracker, enabled);
    if (!faceTracker || !zapparCamera)
        return null;
    return (react_1.default.createElement("faceAnchorGroup", Object.assign({ ref: (0, react_merge_refs_1.default)([faceAnchorGroupRef, ref]), args: [zapparCamera, faceTracker] }, props), children));
});
exports.default = ZapparFaceAnchorGroup;
