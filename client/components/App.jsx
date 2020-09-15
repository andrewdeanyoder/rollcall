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
      notOnBus: [,,,true,,true],
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

  studentClickHandler(e) {
    console.log(e.target.id + ' clicked!');
    const { id } = e.target
    // check if id is in notOnBus
    if(!this.state.notOnBus[id]) {
      console.log('student should be on the bus!');
      this.setState((prevState) => {
        // if not, mark them present
        let presentNow = prevState.studentsPresent;
        presentNow[id] = true;
        return { studentsPresent : presentNow };
      });
    }
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
