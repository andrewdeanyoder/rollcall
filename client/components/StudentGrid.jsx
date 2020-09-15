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
    const { students, announcements, studentsPresent, studentClickHandler } = this.props;
    return (
      <StyledFlex>
        {students.map((student) => {
          // checks whether the student is marked present
          return (
            <Student
              key={student.id}
              student={student}
              isPresent={studentsPresent[student.id]}
              studentClickHandler={studentClickHandler}
            />
          )
        })}
      </StyledFlex>
    );
  }
}

export default StudentGrid;