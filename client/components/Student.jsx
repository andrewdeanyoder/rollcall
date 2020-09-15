import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 180px;
  max-height: 180px;
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
    this.state = {
      active: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('the event:', e.target.id);
    this.props.studentClickHandler(e.target.id);
    this.state = {
      active: true,
    }
  }

  render () {
    const { student, key } = this.props;
    return (
      <Container onClick={this.handleClick} id={student.id}>
        <StudentImage src={student.imageURL} id={student.id}/>
        <StudentName id={student.id}>{student.firstName} {student.lastName}</StudentName>
      </Container>
    );
  }
}

export default Student;