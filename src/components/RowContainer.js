import React from "react";
import styled from "styled-components";

import StyledRowItem from "./styles/RowItem.styled";

const StyledRowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem;
  &:nth-child(odd) {
    background-color: #e7e9eb;
  }
  &:nth-child(even) {
    background-color: #fff;
  }

  transition: all 0.5s;

  :hover {
    background-color: rgba(255, 0, 0, 0.5);
    color: white;
    font-weight: 600;

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
