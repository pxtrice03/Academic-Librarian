import express from "express";
import env from "./config/env.js";
import cors from "cors";

import app = express();

app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json());

export default app;
