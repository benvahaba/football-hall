import axios from "axios";
import React, { useEffect, useState } from "react";
import FlexedColumnContainer from "./FlexedColumnContainer";
import FocusedTeamBody from "./FocusedTeamBody";
import FocusedTeamHeader from "./FocusedTeamHeader";
import StyledBigImg from "./styles/BigImg.styled";
import StyledFlexedVerticalContainer from "./styles/FlexedVerticalContainer.styles";
import StyledFocusedTeamPage from "./styles/FocusedTeamPage.styled";
import * as constants from "../utils/constants";

export default function FocusedTeamPage(props) {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    function getPlayersFromApi() {
      const options = {
        method: "GET",
        url: "https://api-football-v1.p.rapidapi.com/v3/players/squads",
        params: { team: props.selectedTeam.team.id },
        headers: constants.headers,
      };

      axios
        .request(options)
        .then(function (response) {
          setPlayers(response.data.response[0].players);
        })
        .catch(function (error) {
          alert(error.message);
        });
    }
    getPlayersFromApi();
  }, []);

  return (
    <StyledFocusedTeamPage>
      <FocusedTeamHeader
        name={props.selectedTeam.team.name}
        logo={props.selectedTeam.team.logo}
      ></FocusedTeamHeader>
      <FocusedTeamBody>
        <StyledFlexedVerticalContainer>
          <FlexedColumnContainer>
            <h3>Team info</h3>
            {props.selectedTeam.team.country && (
              <p>
                Country: <span>{props.selectedTeam.team.country}</span>
              </p>
            )}
            {props.selectedTeam.team.founded && (
              <p>
                Founded: <span>{props.selectedTeam.team.founded}</span>
              </p>
            )}
            {props.selectedTeam.team.national && <p>National team</p>}
          </FlexedColumnContainer>
          <FlexedColumnContainer>
            <h3>Venue</h3>
            {props.selectedTeam.venue.name && (
              <p>
                Stadium: <span>{props.selectedTeam.venue.name}</span>
              </p>
            )}
            {props.selectedTeam.venue.address && (
              <p>
                Address: <span>{props.selectedTeam.venue.address}</span>
              </p>
            )}
            {props.selectedTeam.venue.city && (
              <p>
                City: <span>{props.selectedTeam.venue.city}</span>
              </p>
            )}
            {props.selectedTeam.venue.capacity && (
              <p>
                Capacity: <span>{props.selectedTeam.venue.capacity}</span>
              </p>
            )}
          </FlexedColumnContainer>
          {props.selectedTeam.venue.image && (
            <StyledBigImg
              src={props.selectedTeam.venue.image}
              alt={"stadium"}
            ></StyledBigImg>
          )}
        </StyledFlexedVerticalContainer>
        <StyledFlexedVerticalContainer></StyledFlexedVerticalContainer>
      </FocusedTeamBody>
    </StyledFocusedTeamPage>
  );
}
