import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 180px;
  max-height: 180px;
`;

const StudentImage = styled.img`
  max-width: 150px;
  border-radius: 50px;
  margin: 5px;
  border: 10px solid ${(props) => {
    // changes border based on whether the student is marked present
    return props.isPresent ? 'green' : 'white';
  }};
  filter: grayscale(${props => props.greyscale}) blur(${props => props.blur}px);
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
    this.state = {
      present: false,
    }
  }

  render () {
    const { student, key , studentClickHandler, isPresent, notRiding } = this.props;
    // calculates the values to style the student Image
    const greyscale = notRiding ? 1 : 0;
    const blur = notRiding ? 4 : 0;
    return (
      <Container onClick={studentClickHandler} id={student.id}>
        <StudentImage src={student.imageURL} id={student.id} isPresent={isPresent} greyscale={greyscale} blur={blur}/>
        <StudentName id={student.id}>{student.firstName} {student.lastName}</StudentName>
      </Container>
    );
  }
}

export default Student;