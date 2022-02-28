import React from "react";
import FlexedColumnContainer from "./FlexedColumnContainer";
import FocusedTeamBody from "./FocusedTeamBody";
import FocusedTeamHeader from "./FocusedTeamHeader";
import StyledFocusedTeamPage from "./styles/FocusedTeamPage.styled";

export default function FocusedTeamPage(props) {
  console.log("FocusedTeamPage", props.selectedTeam);
  return (
    <StyledFocusedTeamPage>
      <FocusedTeamHeader
        name={props.selectedTeam.team.name}
        logo={props.selectedTeam.team.logo}
      ></FocusedTeamHeader>
      <FocusedTeamBody>
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
          <img src={props.selectedTeam.venue.image}></img>
        )}
      </FocusedTeamBody>
    </StyledFocusedTeamPage>
  );
}
