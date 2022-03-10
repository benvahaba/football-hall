import React from "react";
import StyledTeamsListPage from "./styles/TeamsListPage.styled";
import TeamsListHeader from "./TeamsListHeader";
import TeamsListBody from "./TeamsListBody";
import TeamRowContainer from "./TeamRowContainer";
import { useEffect } from "react";
import axiosInstance from "../api/baseApi";
import { useSelector, useDispatch } from "react-redux";
import getTeamByCountryNameApi from "../api/getTeamByCountryNameApi";
import axios from "axios";

function TeamsListPage(props) {
  const dispatch = useDispatch();
  const teamsList = useSelector((state) => state.teams);
  useEffect(() => {
    const headers = {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "2090935e6dmsh6b4ec261a027d74p181990jsneb7c4aece90b",
    };
    const baseUrl = "https://api-football-v1.p.rapidapi.com/v3/";

    const baseApi = axios.create({
      baseUrl: baseUrl,
      headers: headers,
    });

    baseApi.get("/teams", { params: { country: "israel" } }).then((res) => {
      console.log(res);
    });

    // (async () => {
    //   try {
    //     getTeamByCountryNameApi("israel").then((fetchedData) =>
    //       dispatch({ type: "NEW_TEAMS", teams: fetchedData.data.response })
    //     );
    //   } catch (error) {}
    // })();
    // (() => {
    //   axiosInstance
    //     .get("teams/", { params: { country: "israel" } })
    //     .catch((error) => {
    //       alert(error.message);
    //     })
    //     .then((fetchedData) =>
    //       dispatch({ type: "NEW_TEAMS", teams: fetchedData.data.response })
    //     );
    // })();
    // const options = {
    //   method: "GET",
    //   url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
    //   params: { country: "israel" },
    //   headers: {
    //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //     "x-rapidapi-key": "2090935e6dmsh6b4ec261a027d74p181990jsneb7c4aece90b",
    //   },
    // };
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, []);

  return (
    <StyledTeamsListPage>
      <TeamsListHeader />
      <TeamsListBody>
        {teamsList.map((teamFromList) => {
          return (
            <TeamRowContainer
              key={teamFromList.team.id}
              teamFromList={teamFromList}
              onTeamChosenHandle={props.onTeamChosenHandle}
            />
          );
        })}
      </TeamsListBody>
    </StyledTeamsListPage>
  );
}

export default TeamsListPage;
