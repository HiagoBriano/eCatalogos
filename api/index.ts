import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.status(200).json({ status: "active" });
});

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
