import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { Student as StudentModel } from '../models/Models'

interface IProps {
  student: StudentModel;
  studentClickHandler: (e: MouseEvent) => void;
  isPresent: boolean;
  notRiding: boolean;
}

interface IState {

}

const Container = styled.div`
  max-width: 159px;
  max-height: 159px;
`;

const StudentImage = styled.img`
  max-width: 132px;
  border-radius: 50px;
  margin: 5px;
  border: 8.5px solid ${props => props.border};
  filter: grayscale(${props => props.greyscale}) blur(${props => props.blur}px);
`;

const StudentName = styled.div`
  max-width: 100%;
  position: relative;
  top: -50px;
  text-align: center;
  background-color: white;
  font-family: Helvetica, Arial, sans-serif;
`;

class Student extends React.Component <IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      present: false,
    }
  }

  render () {
    const { student , studentClickHandler, isPresent, notRiding } = this.props;
    // calculates the values to style the student images
    // based on whether they are marked present or notRiding
    const border = isPresent ? 'green' : 'white';
    const greyscale = !isPresent && notRiding ? 1 : 0;
    const blur =  !isPresent && notRiding ? 4 : 0;
    return (
      <Container onClick={studentClickHandler} id={student.id}>
        <StudentImage src={student.imageURL} id={student.id} border={border} greyscale={greyscale} blur={blur}/>
        <StudentName id={student.id}>{student.firstName} {student.lastName}</StudentName>
      </Container>
    );
  }
}

export default Student;