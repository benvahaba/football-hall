import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "./routes";

function App() {
  useEffect(() => {
    const headers = {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "2090935e6dmsh6b4ec261a027d74p181990jsneb7c4aece90b",
    };
    const url = "https://api-football-v1.p.rapidapi.com/v3/";

    const baseApi = axios.create({
      baseUrl: url,
      headers: headers,
    });

    baseApi
      .get("teams/", { params: { country: "israel" } })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
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
