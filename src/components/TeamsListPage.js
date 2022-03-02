import React from "react";
import StyledTeamsListPage from "./styles/TeamsListPage.styled";
import TeamsListHeader from "./TeamsListHeader";
import TeamsListBody from "./TeamsListBody";
import TeamRowContainer from "./TeamRowContainer";
import { useEffect } from "react";
import axiosInstance from "../utils/axiosInstans";
import { useSelector, useDispatch } from "react-redux";

function TeamsListPage(props) {
  const dispatch = useDispatch();
  const teamsList = useSelector((state) => state.teams);
  useEffect(() => {
    (() => {
      axiosInstance
        .get("teams/", { params: { country: "israel" } })

        .catch((error) => {
          alert(error.message);
        })
        .then((fetchedData) =>
          dispatch({ type: "NEW_TEAMS", teams: fetchedData.data.response })
        );
    })();
  }, []);

  return (
    <StyledTeamsListPage>
      <TeamsListHeader />
      <TeamsListBody>
        {teamsList.map((teamFromList) => {
          return (
            <TeamRowContainer
              key={teamFromList.team.id}
              teamFromList={teamFromList}
              onTeamChosenHandle={props.onTeamChosenHandle}
            />
          );
        })}
      </TeamsListBody>
    </StyledTeamsListPage>
  );
}

export default TeamsListPage;
