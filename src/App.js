import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import routes from "./routes";
import getTeamByCountryNameApi from "./api/getTeamByCountryNameApi";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const store = createStore(reducer);
  const dispacher = useDispatch();

  async function fetchTeams() {
    await getTeamByCountryNameApi("israel")
      .then((data) => {
        dispacher({ type: "NEW_TEAMS", payload: data });
        console.log("data", data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  fetchTeams();

  return (
    <Provider store={store}>
      <Routes>{routes()}</Routes>
    </Provider>
  );
}

export default App;
