import express from "express";
import { configDotenv } from "dotenv";
import { connectDB } from "./db/db.js";
import { errorHandling } from "./helpers/helper_functions.js";
import router from "./router/index.js";
configDotenv();
const app = express();
app.use(express.json());

//Routes
app.use("/api/v1", router);
//Error Handling
app.use(errorHandling);

app.use(express.json());
(async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.info(`Server listening on ${PORT}`));
  } catch (error) {
    console.error("Failed to start server due to DB connection error:", err);
    process.exit(1);
  }
})();
