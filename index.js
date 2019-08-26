const Axios = require("axios");
const { API_KEY } = require("./config.js");

function getSummonerByName(name) {
  Axios.get(
    `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`
  )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

function getChampRotation() {
  Axios.get(
    `https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`
  )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

function getAllChampions() {
  // TODO cache locally

  const allChampionsUrl =
    "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json";
  Axios.get(allChampionsUrl)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}

function getAllRunes() {
  // these runes have not existed in the game for years

  const allRunesUrl =
    "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/rune.json";
  Axios.get(allRunesUrl)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}
