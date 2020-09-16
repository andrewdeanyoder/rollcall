import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StudentGrid from './StudentGrid';
import StyledNavBar from './NavBar';
import StyledSubmitButton from './SubmitButton'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [{
        id: 0,
        firstName: 'Little Bobby',
        lastName: 'Tables',
        imageURL: '',
        AM_Route: 'Bus 1',
        PM_Route: 'Bus 1'
      }],
      announcements: [],
      routes: [],
      studentsPresent: [],
      notRiding: [,,,true,,true,,,,,true],
      numStudents: 1,
    }
    this.studentClickHandler = this.studentClickHandler.bind(this);
    this.submitClickHandler = this.submitClickHandler.bind(this);
  }

  // pulls all data from the api
  componentDidMount () {
    axios.get('/api/data')
      .then((res) => {
        const {students, announcements, routes} = res.data;
        const numStudents = students.length;
        this.setState({
          students,
          announcements,
          routes,
          numStudents
        });
      })
      .catch((err) => {
        console.log('an error occurred getting data:', err);
      })
  }

  // handles clicks on a student portrait
  studentClickHandler(e) {
    const { id } = e.target
    const { notRiding, studentsPresent } = this.state;

    let userResponse = false;
    // if the student is marked as not riding today
    if(notRiding[id] && !studentsPresent[id]) {
      // give the user the option to override
      userResponse = confirm('This student is not supposed to ride today.\n' +
      'Are you sure they are riding the bus?\n' +
      'Please only check yes after confirming with an administrator.');
    }

    // if the student is marked as riding the bus OR
    // if the user overrode this option OR
    // if the student is marked as not riding the bus but are already present
    if(!notRiding[id] || userResponse || (notRiding[id] && studentsPresent[id])) {
      this.setState((prevState) => {
        // switch their state in the studentsPresent array
        let presentNow = prevState.studentsPresent;
        presentNow[id] = presentNow[id] ? null : true;
        return { studentsPresent : presentNow };
      });
    }
  }

  submitClickHandler() {
    const { studentsPresent, notRiding, students } = this.state;
    let studentsMissing = [];
    // iterate through students
    for (var i = 0; i < students.length; i++) {
      // if student is not present and is riding the bus
      if(!studentsPresent[i] && !notRiding[i])
      {
        studentsMissing.push(students[i].firstName + ' ' + students[i].lastName);
      }
    }
    const prompt = `The following students are marked absent.\n\
    ${studentsMissing.join('\n')}\n\
    Are you sure you want to proceed?`;
    let result = confirm(prompt);

  }

  render() {
    const { students, announcements, studentsPresent, notRiding } = this.state;
    return (
      <div>
        <StudentGrid
          students={students}
          announcements={announcements}
          studentsPresent={studentsPresent}
          notRiding={notRiding}
          studentClickHandler={this.studentClickHandler}/>
        <div>
          <StyledSubmitButton clickHandler={this.submitClickHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
