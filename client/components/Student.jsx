import React from 'react';
import styled from 'styled-components';

const StudentImage = styled.img`
  max-width: 150px;
  border-radius: 50px;
`;

const StudentName = styled.span`
  color: purple;
  top: 40%;
  margin: 0 auto;
`;

class Student extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { student } = this.props;
    return (
      <div>
        <StudentName>{student.firstName} {student.lastName}</StudentName>
        <StudentImage src={student.imageURL} />
      </div>
    );
  }
}

export default Student;