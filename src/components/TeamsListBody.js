import StyledTeamsListBody from "./styles/TeamsListBody.styled";
import React from "react";

export default function TeamListBody(prpos) {
  return <StyledTeamsListBody>{prpos.children}</StyledTeamsListBody>;
}
