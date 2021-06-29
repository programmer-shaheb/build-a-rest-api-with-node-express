import express from "express";
import baseRoute from "./routes/users.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use("/users", baseRoute);

app.listen(port, () => console.log(`App Listening to port ${port}`));
