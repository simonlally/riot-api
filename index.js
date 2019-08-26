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
    });
}
