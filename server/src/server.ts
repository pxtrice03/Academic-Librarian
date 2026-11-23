import "dotenv/config";
import server, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db.js"

import app = express();

await connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Server");
});

app.listen(PORT, () => {
    console.log(`Server running on: http://loalhost:${PORT}`);
});
