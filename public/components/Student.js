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
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 159px;\n  max-height: 159px;\n"], ["\n  max-width: 159px;\n  max-height: 159px;\n"])));
var StudentImage = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 132px;\n  border-radius: 50px;\n  margin: 5px;\n  border: 8.5px solid ", ";\n  filter: grayscale(", ") blur(", "px);\n"], ["\n  max-width: 132px;\n  border-radius: 50px;\n  margin: 5px;\n  border: 8.5px solid ", ";\n  filter: grayscale(", ") blur(", "px);\n"])), function (props) { return props.border; }, function (props) { return props.greyscale; }, function (props) { return props.blur; });
var StudentName = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-width: 100%;\n  position: relative;\n  top: -50px;\n  text-align: center;\n  background-color: white;\n  font-family: Helvetica, Arial, sans-serif;\n"], ["\n  max-width: 100%;\n  position: relative;\n  top: -50px;\n  text-align: center;\n  background-color: white;\n  font-family: Helvetica, Arial, sans-serif;\n"])));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            present: false,
        };
        return _this;
    }
    Student.prototype.render = function () {
        var _a = this.props, student = _a.student, studentClickHandler = _a.studentClickHandler, isPresent = _a.isPresent, notRiding = _a.notRiding;
        // calculates the values to style the student images
        // based on whether they are marked present or notRiding
        var border = isPresent ? 'green' : 'white';
        var greyscale = !isPresent && notRiding ? 1 : 0;
        var blur = !isPresent && notRiding ? 4 : 0;
        return (react_1.default.createElement(Container, { onClick: studentClickHandler, id: student.id },
            react_1.default.createElement(StudentImage, { src: student.imageURL, id: student.id, border: border, greyscale: greyscale, blur: blur }),
            react_1.default.createElement(StudentName, { id: student.id },
                student.firstName,
                " ",
                student.lastName)));
    };
    return Student;
}(react_1.default.Component));
exports.default = Student;
var templateObject_1, templateObject_2, templateObject_3;
