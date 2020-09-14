import React from 'react';
import styled from 'styled-components';

class Student extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { student }= this.props;
    return (
      <div>
        {JSON.stringify(student.firstName)}
      </div>
    );
  }
}

export default Student;