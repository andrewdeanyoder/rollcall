import React from 'react';
import styled from 'styled-components';

 const NavBar = (props) => {
   return (
     <div className={props.className}>
      Attendance App

     </div>
   );
}

const StyledNavBar = styled(NavBar)`
  position: fixed;
  top: 46px;
  font-family: Helvetica,Arial,sans-serif;

`;
export default StyledNavBar;