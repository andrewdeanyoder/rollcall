import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 150px;
`;

const StudentImage = styled.img`
  max-width: 150px;
  border-radius: 50px;
`;

const StudentName = styled.div`
  position: relative;
  top: -35px;
  margin: 0 auto;
  text-align: center;
  background-color: white;
  border-radius: 10px;
`;

class Student extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { student } = this.props;
    return (
      <Container>
        <StudentImage src={student.imageURL} />
        <StudentName>{student.firstName} {student.lastName}</StudentName>
      </Container>
    );
  }
}

export default Student;