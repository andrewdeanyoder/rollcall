import React from 'react';
import styled from 'styled-components';
import Student from './Student';

// When adding the Nav-bar add margin-top: 20px (height of navbar)
// change max-height to 600 - height of navbar

const StyledFlex = styled.div`
  max-width: 830px;
  max-height: 600px;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class StudentGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { students, announcements, studentsPresent, notRiding, studentClickHandler } = this.props;
    return (
      <StyledFlex>
        {students.map((student) => {
          // isPresent & notRiding check whether the student is marked as not riding the bus
          // or is marked as present
          return (
            <Student
              key={student.id}
              student={student}
              isPresent={studentsPresent[student.id]}
              notRiding={notRiding[student.id]}
              studentClickHandler={studentClickHandler}
            />
          )
        })}
      </StyledFlex>
    );
  }
}

export default StudentGrid;