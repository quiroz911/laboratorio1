import express from "express";
import cors from "cors";
import { userCrud } from "./views/user/userCrud.js";
import { enterpriseCrud } from "./views/enterprise/enterpriseCrud.js";

const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());

app.use(userCrud);
app.use(enterpriseCrud)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
