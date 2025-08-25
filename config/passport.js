const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const users = require("../storage/queries.js");

passport.use(
  new localStrategy(async (username, password, done) => {
    try {
      const rows = await users.findUserByUsername(username);
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Username doesn't exist" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect Password" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const rows = await users.findUserById(id);
    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});
