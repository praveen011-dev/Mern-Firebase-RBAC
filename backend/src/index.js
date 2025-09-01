import app from "./app.js";
import connectDB from "./db/connect.js";

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("server is started at port", port);
    });
  })
  .catch((error) => {
    console.error("error while starting the server", error);
  });
