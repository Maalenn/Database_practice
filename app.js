const express = require("express");

const app = express();
const globalHandlingError = require('./controllers/errorController')
const AppError = require("./utils/appError");
const UserRouter = require("./routes/UserRoute");

// Middleware
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

// Routes
app.use("/api/v1/users", UserRouter);

// Handling undefined routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalHandlingError)

module.exports = app;
