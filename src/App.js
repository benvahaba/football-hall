import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "./routes";

function App() {
  // const [selectedTeam, setSelectedTeam] = useState(null);
  // const navigate = useNavigate();

  // function onTeamChosenHandle(team) {
  //   setSelectedTeam(team);
  // }
  // useEffect(() => {
  //   if (selectedTeam !== null) {
  //     navigate(`/teams/${selectedTeam.team.name}`);
  //   }
  // }, [selectedTeam]);

  return <Routes>{routes()}</Routes>;
}

export default App;
