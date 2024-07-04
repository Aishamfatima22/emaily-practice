// es6 imports ye new hain
const express = require("express"); // commonjs modules
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("./config/keys");
const app = express();
/**
 * app meri express ap hai jispe main function aur routes handle kr skta hu
 *
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done, email) => {
      console.log("Access Token: ", accessToken);
      console.log("Refresh Token: ", refreshToken);
      console.log("Profile: ", profile);
      console.log("done: ", done);
      console.log("email: ", email);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
