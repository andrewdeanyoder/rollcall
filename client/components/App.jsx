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
      routes: []
    }
    this.studentClickHandler = this.studentClickHandler.bind(this);
  }

  // pulls all data from the api
  componentDidMount () {
    axios.get('/api/data')
      .then((res) => {
        const {students, announcements, routes} = res.data;
        this.setState({
          students,
          announcements,
          routes
        });
      })
      .catch((err) => {
        console.log('an error occurred getting data:', err);
      })
  }

  studentClickHandler(id) {
    console.log(id + 'clicked!')
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
