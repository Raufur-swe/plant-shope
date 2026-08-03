import express from "express";
import dns from "dns"

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();




app.use(express.json());


export default app;