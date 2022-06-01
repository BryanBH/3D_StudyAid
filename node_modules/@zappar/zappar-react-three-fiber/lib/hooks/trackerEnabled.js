"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-param-reassign */
const react_1 = require("react");
const ToggleTrackerEnabledState = (tracker, enabled) => {
    (0, react_1.useEffect)(() => {
        if (tracker && enabled !== undefined) {
            tracker.enabled = enabled;
        }
    }, [tracker, enabled]);
};
exports.default = ToggleTrackerEnabledState;
