import express from "express";
import createError from "http-errors";
import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import passport from "passport";
import LocalStrategy from "passport-local";
import bcryptjs from "bcryptjs";
import session from "express-session";
import userRouter from "./routes/userRouter.js";
import messageRouter from "./routes/messageRouter.js";
import User from "./models/user.js";

dotenv.config();

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_CONN;

async function dbConnect() {
  await mongoose.connect(mongoDB);
}

dbConnect().catch((err) => console.log(err));

app.use(session({ secret: "omar", resave: false, saveUninitialized: true }));
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ email: username });
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      const isPassCorrect = await bcryptjs.compare(password, user.password);
      if (!isPassCorrect) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRouter);
app.use("/message", messageRouter);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`members only app listening on port ${port}`);
});

export default app;
