const keys = require("../../config/keys");
const axios = require("axios");

module.exports = axios.create({
  baseURL:  keys.senkitServerURL + "/api/"
});
