import { Types } from "../spec";
declare type Tracker = Types.InstantWorldTracker | Types.FaceTracker | Types.ImageTracker;
declare const ToggleTrackerEnabledState: (tracker?: Tracker | undefined, enabled?: boolean | undefined) => void;
export default ToggleTrackerEnabledState;
