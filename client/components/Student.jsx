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
    // console.log('props: ', props);
    return props.present ? 'green' : 'white';
  }};
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
    const { student, key , studentClickHandler } = this.props;
    const { present } = this.state;
    return (
      <Container onClick={studentClickHandler} id={student.id}>
        <StudentImage src={student.imageURL} id={student.id} present={present}/>
        <StudentName id={student.id}>{student.firstName} {student.lastName}</StudentName>
      </Container>
    );
  }
}

export default Student;