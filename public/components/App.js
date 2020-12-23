"use strict";
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
var axios_1 = __importDefault(require("axios"));
var StudentGrid_1 = __importDefault(require("./StudentGrid"));
var SubmitButton_1 = __importDefault(require("./SubmitButton"));
var sample_1 = require("../data/sample");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props || {}) || this;
        _this.state = {
            students: [sample_1.sampleStudent],
            //announcements: [],
            //routes: [],
            studentsPresent: [],
            notRiding: [true, , , , , , , true, , , true],
            numStudents: 1,
        };
        _this.studentClickHandler = _this.studentClickHandler.bind(_this);
        _this.submitClickHandler = _this.submitClickHandler.bind(_this);
        return _this;
    }
    // pulls all data from the api
    App.prototype.componentDidMount = function () {
        var _this = this;
        axios_1.default.get('/api/data')
            .then(function (res) {
            var _a = res.data, students = _a.students, /*announcements,*/ routes = _a.routes;
            var numStudents = students.length;
            _this.setState({
                students: students,
                //announcements,
                //routes,
                numStudents: numStudents
            });
        })
            .catch(function (err) {
            console.log('an error occurred getting data:', err);
        });
    };
    // handles clicks on a student portrait
    App.prototype.studentClickHandler = function (e) {
        var id = e.target.id;
        var _a = this.state, notRiding = _a.notRiding, studentsPresent = _a.studentsPresent;
        var userResponse = false;
        // if the student is marked as not riding today
        if (notRiding[id] && !studentsPresent[id]) {
            // give the user the option to override
            userResponse = confirm('This student is not supposed to ride today.\n' +
                'Are you sure they are riding the bus?\n' +
                'Please only check yes after confirming with an administrator.');
        }
        // if the student is marked as riding the bus OR
        // if the user overrode this option OR
        // if the student is marked as not riding the bus but are already present
        if (!notRiding[id] || userResponse || (notRiding[id] && studentsPresent[id])) {
            this.setState(function (prevState) {
                // switch their state in the studentsPresent array
                var presentNow = prevState.studentsPresent;
                presentNow[id] = presentNow[id] ? null : true;
                return { studentsPresent: presentNow };
            });
        }
    };
    App.prototype.submitClickHandler = function () {
        var _a = this.state, studentsPresent = _a.studentsPresent, notRiding = _a.notRiding, students = _a.students;
        var studentsMissing = [];
        // iterate through students
        for (var i = 0; i < students.length; i++) {
            // if student is not present and is riding the bus
            if (!studentsPresent[i] && !notRiding[i]) {
                studentsMissing.push(students[i].firstName + ' ' + students[i].lastName);
            }
        }
        // prompt user to confirm absent students
        var prompt = "The following students are marked absent.\n    " + studentsMissing.join('\n') + "\n    Are you sure you want to proceed?";
        var result = confirm(prompt);
        // TODO: submit attendance results to database
        // use helper function?
        if (result) {
            alert('Attendance submitted!');
        }
    };
    App.prototype.render = function () {
        var _a = this.state, students = _a.students, /* announcements ,*/ studentsPresent = _a.studentsPresent, notRiding = _a.notRiding;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(StudentGrid_1.default, { students: students, 
                //announcements={announcements}
                studentsPresent: studentsPresent, notRiding: notRiding, studentClickHandler: this.studentClickHandler }),
            react_1.default.createElement("div", null,
                react_1.default.createElement(SubmitButton_1.default, { clickHandler: this.submitClickHandler }))));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
