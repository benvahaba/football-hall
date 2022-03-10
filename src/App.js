import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "./routes";
import baseApi from "./api/baseApi";
import getTeamByCountryNameApi from "./api/getTeamByCountryNameApi";

function App() {
  useEffect(async () => {
    await getTeamByCountryNameApi("israel")
      .then((data) => console.log("whatwhat", data))
      .catch((error) => {
        alert(error.message);
      });
  }, []);

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
