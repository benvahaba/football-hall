import React from "react";
import { Routes } from "react-router-dom";
import routes from "./routes";
import getTeamByCountryNameApi from "./api/getTeamByCountryNameApi";
import { useDispatch } from "react-redux";

function App() {

  const dispach = useDispatch();

  async function fetchTeams() {
    await getTeamByCountryNameApi("israel")
      .then((data) => dispach({ type: "NEW_TEAMS", payload: data }))
      .catch((error) => {
        alert(error.message);
      });
  }

  fetchTeams();

  return <Routes>{routes()}</Routes>;
}

export default App;
