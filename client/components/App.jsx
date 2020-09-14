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
      .then((data) => {
        console.log('data:', data);
      })
  }

  render() {
    return (
      <div>Hello America!</div>
    );
  }
}