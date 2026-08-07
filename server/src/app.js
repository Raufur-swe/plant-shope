import express from "express";
import dns from "dns"
import AuthRouter from "./routes/authRoute.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();


app.use(express.json());

//auth routes
app.use("/api/v1/auth", AuthRouter)

export default app;