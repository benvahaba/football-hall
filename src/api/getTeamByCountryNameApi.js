import baseApi from "./baseApi";

export default async (countryName) =>
  await baseApi.get("teams/", {
    params: {
      country: countryName,
    },
  });
