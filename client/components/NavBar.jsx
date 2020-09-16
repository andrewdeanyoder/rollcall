import React from 'react';
import styled from 'styled-components';

 const NavBar = (props) => {
   return (
     <div className={props.className}>
        <span>Attendance App</span>
     </div>
   );
}

const StyledNavBar = styled(NavBar)`
  position: fixed;
  top: 46px;
  font-family: Lato,Helvetica,Arial,sans-serif;

`;
export default StyledNavBar;