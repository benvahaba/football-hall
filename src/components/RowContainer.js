import React from "react";
import styled from "styled-components";

import StyledRowItem from "./styles/RowItem.styled";

const StyledRowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 0.5rem;

  transition: all 0.5s;

  :hover {
    background-color: red;
    color: white;
    transform: scale(105%);
    cursor: pointer;
  }
`;

function TeamRowContainer(props) {
  return (
    <StyledRowContainer
      onClick={() => {
        props.onTeamChosenHandle(props.teamFromList.team.id);
      }}
    >
      <>
        <StyledRowItem>{props.teamFromList.team.name}</StyledRowItem>
        <StyledRowItem>{props.teamFromList.team.founded}</StyledRowItem>
        <StyledRowItem>{props.teamFromList.venue.address}</StyledRowItem>
      </>
    </StyledRowContainer>
  );
}

export default TeamRowContainer;
