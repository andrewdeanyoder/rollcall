import React from 'react';
import styled from 'styled-components';
import Student from './Student';

const StyledFlex = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class StudentGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { students, announcements, studentClickHandler } = this.props;
    return (
      <StyledFlex>
        {students.map((student) => {
          return <Student key={student.id} student={student} studentClickHandler={studentClickHandler}/>
        })}
      </StyledFlex>
    );
  }
}

export default StudentGrid;