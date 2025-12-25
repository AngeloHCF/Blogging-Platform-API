import { app } from "./app.js";
import { PORT } from "./config.js";
import { pool } from "./db.js";

app.listen(PORT, () => {
  console.log(`Your server is running ${PORT}`);
});

pool
  .query("SELECT 1")
  .then(() => console.log("DB Connected"))
  .catch((error) => console.error(error));
