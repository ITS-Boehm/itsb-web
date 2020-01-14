import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

import { HttpError } from "./models/http-error";
import contactRoute from "./routes/contact";

const app = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

app.use("/contact", contactRoute);

app.use((req: Request, res: Response, next: NextFunction) => {
  throw new HttpError("Could not find this route", 404);
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

// TODO #41: Store the variables like credentials and url in an ENV file. (PORT)
app.listen(3991);
