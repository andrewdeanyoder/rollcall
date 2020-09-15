import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StudentGrid from './StudentGrid';

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
    console.log(e.target.id + ' clicked!');
    const { id } = e.target
    // check if the student is marked as not riding today
    if(!this.state.notRiding[id]) {
      this.setState((prevState) => {
        // if not, switch their state in the studentsPresent array
        let presentNow = prevState.studentsPresent;
        presentNow[id] = presentNow[id] ? null : true;
        return { studentsPresent : presentNow };
      });
    } else {
      console.log('student should not be on the bus!');
    }
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
      </div>
    );
  }
}

export default App;
