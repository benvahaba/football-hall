import React from "react";
import RowContainer from "../components/RowContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledRowItem from "../components/styles/RowItem.styled";

const StyledTeamsListPage = styled.div`
  width: 50vw;
  position: relative;
  top: 20vh;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid black;
  .team {
    &__header {
      display: flex;
      justify-content: space-around;

      background-color: black;
      color: white;
      padding: 0.5rem;
      font-weight: 600;
    }
    &__body {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 0.5rem;
    }
  }
`;

function TeamsListPage(props) {
  const teamsList = useSelector((state) => state.payload);
  const navigate = useNavigate();

  function onTeamChosenHandle(teamId) {
    navigate(`/teams/${teamId}`);
  }

  return (
    <StyledTeamsListPage>
      <div className="team__header">
        <StyledRowItem>Name</StyledRowItem>
        <StyledRowItem>Founded</StyledRowItem>
        <StyledRowItem>Address</StyledRowItem>
      </div>
      <div className="team__body">
        {teamsList.map((teamFromList) => {
          return (
            <RowContainer
              key={teamFromList.team.id}
              teamFromList={teamFromList}
              onTeamChosenHandle={onTeamChosenHandle}
            />
          );
        })}
      </div>
    </StyledTeamsListPage>
  );
}

export default TeamsListPage;
