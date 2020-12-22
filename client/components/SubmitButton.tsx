import React from 'react';
import styled from 'styled-components';

const SubmitButton = (props) => {
  return (
    <button onClick={props.clickHandler} className={props.className}>Submit Attendance</button>
  )
}

const StyledSubmitButton = styled(SubmitButton)`
  border-radius: 50px;
  border: none;
  background-color: red;
  color: white;
  font-size: 24px;
  text-align: center;
  text-decoration: none;
  padding: 10px 16px;
  position: fixed;
  margin: 0 auto;
  top: 598px;
  left: 430px;
`;

export default StyledSubmitButton;