import GlobalStyles from "./components/styles/Global";
import Container from "./components/styles/Container.styled";
import TeamsListContainer from "./components/TeamsListContainer";
import React, { useEffect, useState } from "react";
import * as constans from "./utils/constants";
import { Route, Routes, useNavigate } from "react-router-dom";
import FocusedTeamPage from "./components/FocusedTeamPage";

function App() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamsList, setTeamsList] = useState([]);
  const navigate = useNavigate();

  async function fetchTeams() {
    try {
      const rawData = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/teams?country=israel",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": constans.RAPIDAPI_HOST,
            "x-rapidapi-key": constans.RAPIDAPI_KEY,
          },
        }
      );

      const data = await rawData.json();
      setTeamsList(data.response);
      console.log("teams fetched", teamsList);
    } catch (e) {
      //todo display Error
      console.log(e);
    }
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  function onTeamChosenHandle(team) {
    setSelectedTeam(team);
  }
  useEffect(() => {
    if (selectedTeam !== null) {
      navigate(`/teams/${selectedTeam.team.name}`);
    }
  }, [selectedTeam]);

  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route
          path={"/" | "/teams"}
          element={
            <Container>
              <TeamsListContainer
                teamsList={teamsList}
                onTeamChosenHandle={onTeamChosenHandle}
              ></TeamsListContainer>
            </Container>
          }
        />
        <Route
          exact
          path="/teams/:id"
          element={
            <Container>
              <FocusedTeamPage selectedTeam={selectedTeam}></FocusedTeamPage>
            </Container>
          }
        />
      </Routes>
    </>
  );
}

export default App;
