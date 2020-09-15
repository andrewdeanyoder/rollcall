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
      numStudents: 1,
      plansChanged: [,,,true,,true],
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

  studentClickHandler(id) {
    console.log(id + ' clicked!')
    this.setState((prevState) => {
      // check if id is in plansChanged
      if(this.state.plansChanged[id]) {
        console.log('student isnt on the bus!');
      }
        // if not, change present
      const nowPresent = prevState.studentsPresent;
    });
  }

  render() {
    const { students, announcements } = this.state;
    return (
      <div>
        <StudentGrid students={students} announcements={announcements} studentClickHandler={this.studentClickHandler}/>
      </div>
    );
  }
}

export default App;
