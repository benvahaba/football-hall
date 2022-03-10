import baseApi from "./baseApi";

export default function getPlayersByTeamIdApi(id) {
  return baseApi.get("players/squads/", {
    params: { team: id },
  });
}

// axiosInstance
// .get("players/squads/", {
//   params: { team: props.selectedTeam.team.id },
// })
// .catch(function (error) {
//   alert(error.message);
// })
// .then(function (response) {
//   setPlayers(response.data.response[0].players);
// });
// }
