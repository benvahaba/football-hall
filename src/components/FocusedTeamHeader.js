import React from "react";

import styled from "styled-components";

const StyledFocusedTeamHeader = styled.div`
  width: 100%;
  font-size: 1.3;
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  font-size: 2rem;
  box-shadow: 0.5rem 0.5rem 0.5rem black;
  .team--logo {
    height: 10rem;
    width: auto;
  }
`;

function FocusedTeamHeader(props) {
  return (
    <StyledFocusedTeamHeader>
      <img className="team--logo" src={props.logo} alt={props.name} />
      <p>{props.name}</p>
    </StyledFocusedTeamHeader>
  );
}

export default FocusedTeamHeader;
