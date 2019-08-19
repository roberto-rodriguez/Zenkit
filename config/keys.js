//Prod

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  let dev = null;

  try {
    dev = require("./dev");
  } catch (ex) {
    dev = require("./prod");
  }

  module.exports = dev;
}
