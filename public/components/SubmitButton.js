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
var SubmitButton = function (props) {
    return (react_1.default.createElement("button", { onClick: props.clickHandler, className: props.className }, "Submit Attendance"));
};
var StyledSubmitButton = styled_components_1.default(SubmitButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 50px;\n  border: none;\n  background-color: red;\n  color: white;\n  font-size: 24px;\n  text-align: center;\n  text-decoration: none;\n  padding: 10px 16px;\n  position: fixed;\n  margin: 0 auto;\n  top: 598px;\n  left: 430px;\n"], ["\n  border-radius: 50px;\n  border: none;\n  background-color: red;\n  color: white;\n  font-size: 24px;\n  text-align: center;\n  text-decoration: none;\n  padding: 10px 16px;\n  position: fixed;\n  margin: 0 auto;\n  top: 598px;\n  left: 430px;\n"])));
exports.default = StyledSubmitButton;
var templateObject_1;
