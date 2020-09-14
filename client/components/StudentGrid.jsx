import React from 'react';
import styled from 'styled-components';
import Student from './Student';

class StudentGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { students, announcements } = this.props;
    return (
      <div>
        <Student student={students[0]} />
      </div>
    );
  }
}

export default StudentGrid;