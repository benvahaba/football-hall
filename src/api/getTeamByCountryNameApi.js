import baseApi from "./baseApi";

export default async function getTeamByCountryNameApi(countryName) {
  return await baseApi.get("teams/", {
    params: {
      country: countryName,
    },
  });
}
