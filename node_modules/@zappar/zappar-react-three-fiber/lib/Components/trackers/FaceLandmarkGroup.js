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
const { FaceLandmarkGroup } = ZapparThree;
(0, fiber_1.extend)({ FaceLandmarkGroup });
/**
 * A `THREE.Group` which attaches content to a known point (landmark) on a face as it moves around in the camera view.
 * Landmarks will remain accurate, even as the user's expression changes.
 * @see https://docs.zap.works/universal-ar/web-libraries/react-threejs/face-tracking/
 */
const zapparFaceLandmark = (0, react_1.forwardRef)((props, ref) => {
    var _a;
    const { children, trackerGroup, camera, target } = props;
    const faceLandmarkGroupRef = (0, react_1.useRef)();
    const store = {
        camera: store_1.default.camera((state) => state),
        faceTracker: store_1.default.faceTracker((state) => state),
    };
    const faceTracker = ((_a = trackerGroup === null || trackerGroup === void 0 ? void 0 : trackerGroup.current) === null || _a === void 0 ? void 0 : _a.faceTracker) ? trackerGroup.current.faceTracker : store.faceTracker.object;
    const zapparCamera = (camera === null || camera === void 0 ? void 0 : camera.current) ? camera.current : store.camera.object;
    if (!faceTracker || !zapparCamera)
        return null;
    return (react_1.default.createElement("faceLandmarkGroup", Object.assign({ args: [zapparCamera, faceTracker, ZapparThree.FaceLandmarkName[target.toUpperCase().replace("-", "_")]], ref: (0, react_merge_refs_1.default)([faceLandmarkGroupRef, ref]) }, props), children));
});
exports.default = zapparFaceLandmark;
