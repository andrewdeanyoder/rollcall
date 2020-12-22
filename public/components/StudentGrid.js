"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Student_1 = __importDefault(require("./Student"));
// When adding the Nav-bar add margin-top: 20px (height of navbar)
// change max-height to 600 - height of navbar
var StyledFlex = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 830px;\n  max-height: 600px;\n  overflow: scroll;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"], ["\n  max-width: 830px;\n  max-height: 600px;\n  overflow: scroll;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"])));
var StudentGrid = /** @class */ (function (_super) {
    __extends(StudentGrid, _super);
    function StudentGrid(props) {
        return _super.call(this, props) || this;
    }
    StudentGrid.prototype.render = function () {
        var _a = this.props, students = _a.students, announcements = _a.announcements, studentsPresent = _a.studentsPresent, notRiding = _a.notRiding, studentClickHandler = _a.studentClickHandler;
        return (react_1.default.createElement(StyledFlex, null, students.map(function (student) {
            // isPresent & notRiding check whether the student is marked as not riding the bus
            // or is marked as present
            return (react_1.default.createElement(Student_1.default, { key: student.id, student: student, isPresent: studentsPresent[student.id], notRiding: notRiding[student.id], studentClickHandler: studentClickHandler }));
        })));
    };
    return StudentGrid;
}(react_1.default.Component));
exports.default = StudentGrid;
var templateObject_1;
