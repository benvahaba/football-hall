import React, { useEffect, useState } from "react";
import FlexedColumnContainer from "../components/FlexedColumnContainer";
import FocusedTeamBody from "../components/FocusedTeamBody";
import FocusedTeamHeader from "../components/FocusedTeamHeader";
import PlayerCard from "../components/PlayerCard";

import getPlayersByTeamIdApi from "../api/getPlayersByTeamIdApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledFocusedTeamPage = styled.div`
  position: relative;
  top: 15vh;
  left: 50%;
  transform: translate(-50%);
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .container--vertical {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .img--big {
    width: 33%;
    height: auto;
  }
  .player--img {
    width: 150px;
    height: fit-content;
  }
`;

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

  return teamAndVenue ? (
    <StyledFocusedTeamPage>
      <FocusedTeamHeader
        name={teamAndVenue.team.name}
        logo={teamAndVenue.team.logo}
      ></FocusedTeamHeader>
      <FocusedTeamBody>
        <div className="container--vertical">
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
          {teamAndVenue.venue.image && (
            <img
              className="img--big"
              src={teamAndVenue.venue.image}
              alt={"stadium"}
            ></img>
          )}
        </div>
        <div className="container--vertical">
          {players.map((player) => {
            return (
              <PlayerCard key={player.id}>
                <img className="player--img" src={player.photo} alt={player} />
                <h4>{player.name}</h4>
                {player.number && (
                  <p>
                    Number: <span>{player.number}</span>
                  </p>
                )}
              </PlayerCard>
            );
          })}
        </div>
      </FocusedTeamBody>
    </StyledFocusedTeamPage>
  ) : (
    <></>
  );
}
