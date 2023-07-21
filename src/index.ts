import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express + TypeScript Server⚡️");
});
app.get("/api", (req: Request, res: Response) => {
  res.send("Hello Express + API TypeScript Server⚡️");
});

app.get("/api/:id", (req: Request, res: Response) => {
  res.send("Hello Express + API TypeScript Server⚡️" + req.params.id);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
