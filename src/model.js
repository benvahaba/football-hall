import * as constans from "./utils/constants";

export const state = { teamsInfo: [] };

export async function getTeams() {
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
    state.teamsInfo = data.response;
    console.log("teams fetched", state.teamsInfo.length);
  } catch (e) {
    //todo display Error
    console.log(e);
  }
}
