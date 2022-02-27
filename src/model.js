export async function getTeams() {
  try {
    const rawData = await fetch(
      "https://api.football-data.org/v2/competitions/",
      {
        dataType: "json",
        type: "GET",
        headers: { "X-Auth-Token": "aaafc54e607245309183c64ecd771125" },
        mode: "no-cors",
      }
    );

    console.log(rawData);
  } catch (e) {
    console.log(e);
  }
}
