import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      announcements: [],
      routes: []
    }
  }

  componentDidMount () {
    axios.get('/api/data')
      .then((resp) => {
        const {students, announcements, routes} = resp.data;
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

  render() {
    return (
      <div>Hello America!</div>
    );
  }
}

export default App;
