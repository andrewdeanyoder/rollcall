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
        {students.map((student) => {
          return <Student student={student} />
        })}
      </div>
    );
  }
}

export default StudentGrid;