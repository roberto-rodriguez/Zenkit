const express = require("express");
const cookieSession = require("cookie-session");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
var flash = require("connect-flash");

require("./server/services/passport");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["some_key_here"]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./server/routes/authRoutes")(app); //1- Express look if request match any of these routes
require("./server/routes/sprintRoutes")(app); //2- Express look if request match any of these routes

if (process.env.NODE_ENV === "production") {
  // Express  will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build")); //Finally-  Express look if the request is for an asset
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
