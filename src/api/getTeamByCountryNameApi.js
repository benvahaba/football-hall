import baseApi from "./baseApi";

export const getTeamByCountryNameApi = async (countryName) =>
  baseApi.get("teams/", {
    params: {
      country: countryName,
    },
  });
