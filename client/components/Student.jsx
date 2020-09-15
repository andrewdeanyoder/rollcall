import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 180px;
`;

const StudentImage = styled.img`
  max-width: 150px;
  border-radius: 50px;
  border: 10px solid white;
  margin: 5px;
`;

const StudentName = styled.div`
  position: relative;
  top: -50px;
  text-align: center;
  background-color: white;
  font-family: Helvetica, Arial, sans-serif;
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