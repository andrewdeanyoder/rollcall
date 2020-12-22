"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var NavBar = function (props) {
    return (react_1.default.createElement("div", { className: props.className },
        react_1.default.createElement("span", null, "Attendance App")));
};
var StyledNavBar = styled_components_1.default(NavBar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 46px;\n  font-family: Lato,Helvetica,Arial,sans-serif;\n\n"], ["\n  position: fixed;\n  top: 46px;\n  font-family: Lato,Helvetica,Arial,sans-serif;\n\n"])));
exports.default = StyledNavBar;
var templateObject_1;
