import GlobalStyles from "./components/styles/Global";
import * as model from "./model";
import Container from "./components/styles/Container.styled";
import TeamsListContainer from "./components/TeamsListContainer";
import selectedTeamContext from "./components/contexts/selectedTeamContext";
import React, { useState } from "react";

function App() {
  model.getTeams();

  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <>
      <selectedTeamContext.Provider value={[selectedTeam, setSelectedTeam]}>
        <GlobalStyles />
        <Container>
          <TeamsListContainer />
        </Container>
      </selectedTeamContext.Provider>
    </>
  );
}

export default App;
