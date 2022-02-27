import StyledTeamsListBody from "./styles/TeamsListBody.styled";
import TeamRowContainer from "./TeamRowContainer";
import * as model from "../model";
import React, { useEffect, useState } from "react";
import StyledTeamRowItem from "./styles/TeamRawItem.styled";

function CountryListBody() {
  const [teamsList, _] = useState(model.state.teamsInfo);

  useEffect(() => {
    console.log("list changed", teamsList);
  }, teamsList);

  return (
    <StyledTeamsListBody>
      {teamsList.map((teamInfo) => {
        return (
          <TeamRowContainer>
            <StyledTeamRowItem>
              <p>{teamInfo.team.name}</p>
            </StyledTeamRowItem>
            <StyledTeamRowItem>
              <p>{teamInfo.team.founded}</p>
            </StyledTeamRowItem>
            <StyledTeamRowItem>
              <p>{teamInfo.venue.address}</p>
            </StyledTeamRowItem>
          </TeamRowContainer>
        );
      })}
    </StyledTeamsListBody>
  );
}

export default CountryListBody;
