import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

import stringsController from "./controllers/strings";
import productsController from "./controllers/products";
import productListsController from "./controllers/productlist";

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productListsController);


app.use(cors({
    origin: ['http://localhost:3006']
  }));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});