import React, { useEffect, useState } from "react";
import FlexedColumnContainer from "./FlexedColumnContainer";
import FocusedTeamBody from "./FocusedTeamBody";
import FocusedTeamHeader from "./FocusedTeamHeader";
import StyledBigImg from "./styles/BigImg.styled";
import StyledFlexedVerticalContainer from "./styles/FlexedVerticalContainer.styles";
import StyledFocusedTeamPage from "./styles/FocusedTeamPage.styled";
import axiosInstance from "../utils/axiosInstans";
import PlayerCard from "./PlayerCard";
import PlayerImg from "./styles/PlayerImg.styles";

export default function FocusedTeamPage(props) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    function getPlayersFromApi() {
      axiosInstance
        .get("players/squads/", {
          params: { team: props.selectedTeam.team.id },
        })
        .catch(function (error) {
          alert(error.message);
        })
        .then(function (response) {
          setPlayers(response.data.response[0].players);
        });
    }
    getPlayersFromApi();
  }, []);

  useEffect(() => {
    console.log("players", players);
  }, [players]);

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
          {/* TODO ask Oz why it still shows */}
          {props.selectedTeam.venue.image && (
            <StyledBigImg
              src={props.selectedTeam.venue.image}
              alt={"stadium"}
            ></StyledBigImg>
          )}
        </StyledFlexedVerticalContainer>
        <StyledFlexedVerticalContainer>
          {players.map((player) => {
            return (
              <PlayerCard key={player.id}>
                <PlayerImg src={player.photo} alt={player} />
                <h4>{player.name}</h4>
                {player.number && (
                  <p>
                    Number: <span>{player.number}</span>
                  </p>
                )}
              </PlayerCard>
            );
          })}
        </StyledFlexedVerticalContainer>
      </FocusedTeamBody>
    </StyledFocusedTeamPage>
  );
}
