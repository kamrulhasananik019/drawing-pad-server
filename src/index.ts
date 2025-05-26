import type { Request, Response } from "express";

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Anik");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
