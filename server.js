const app = require("./app");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const Model = require("./models/index");

dotenv.config({ path: "./.env" });

const syncDb = async () => {
  try {
    await sequelize.sync({ force: false, logging: false, alter: true });
    console.log("Database sync successfully");
  } catch (err) {
    console.log("Database synced failed", err);
    process.exit(1);
  }
};
syncDb();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
