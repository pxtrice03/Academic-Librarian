import app from "./app.js";
import "dotenv/config";
import server, { Request, Response } from "express";
import connectDB from "./config/db.js";

await connectDB();

const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Server");
});

app.listen(PORT, () => {
    console.log(`Server running on: http://loalhost:${PORT}`);
});
