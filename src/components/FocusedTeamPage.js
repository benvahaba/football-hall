import React, { useEffect, useState } from "react";
import FlexedColumnContainer from "./FlexedColumnContainer";
import FocusedTeamBody from "./FocusedTeamBody";
import FocusedTeamHeader from "./FocusedTeamHeader";
import StyledBigImg from "./styles/BigImg.styled";
import StyledFlexedVerticalContainer from "./styles/FlexedVerticalContainer.styles";
import StyledFocusedTeamPage from "./styles/FocusedTeamPage.styled";
import PlayerCard from "./PlayerCard";
import PlayerImg from "./styles/PlayerImg.styles";
import getPlayersByTeamIdApi from "../api/getPlayersByTeamIdApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FocusedTeamPage(props) {
  const [players, setPlayers] = useState([]);
  const teamId = useParams(null);
  const teams = useSelector((state) => state.payload);
  const [teamAndVenue, setTeamAndVenue] = useState(null);

  useEffect(() => {
    if (teamId === null) return;

    setTeamAndVenue(
      teams.find((teamFromList) => teamFromList.team.id == teamId.id)
    );

    getPlayersByTeamId(teamId);
  }, [teamId]);

  async function getPlayersByTeamId(id) {
    await getPlayersByTeamIdApi(id.id)
      .then((response) => {
        console.log("response", response);
        setPlayers(response[0].players);
      })
      .catch(function (error) {
        alert(error);
      });
  }

  useEffect(() => {
    console.log("teamAndVenue", teamAndVenue);
  }, [teamAndVenue]);

  return (
    <StyledFocusedTeamPage>
      {teamAndVenue ? (
        <FocusedTeamHeader
          name={teamAndVenue.team.name}
          logo={teamAndVenue.team.logo}
        ></FocusedTeamHeader>
      ) : (
        <></>
      )}

      <FocusedTeamBody>
        <StyledFlexedVerticalContainer>
          <FlexedColumnContainer>
            <h3>Team info</h3>
            {teamAndVenue.team.country && (
              <p>
                Country: <span>{teamAndVenue.team.country}</span>
              </p>
            )}
            {teamAndVenue.team.founded && (
              <p>
                Founded: <span>{teamAndVenue.team.founded}</span>
              </p>
            )}
            {teamAndVenue.team.national && <p>National team</p>}
          </FlexedColumnContainer>
          <FlexedColumnContainer>
            <h3>Venue</h3>
            {teamAndVenue.venue.name && (
              <p>
                Stadium: <span>{teamAndVenue.venue.name}</span>
              </p>
            )}
            {teamAndVenue.venue.address && (
              <p>
                Address: <span>{teamAndVenue.venue.address}</span>
              </p>
            )}
            {teamAndVenue.venue.city && (
              <p>
                City: <span>{teamAndVenue.venue.city}</span>
              </p>
            )}
            {teamAndVenue.venue.capacity && (
              <p>
                Capacity: <span>{teamAndVenue.venue.capacity}</span>
              </p>
            )}
          </FlexedColumnContainer>
          {/* TODO ask Oz why it still shows */}
          {teamAndVenue.venue.image && (
            <StyledBigImg
              src={teamAndVenue.venue.image}
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
