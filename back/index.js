import express from "express";
import cors from "cors";
import { userCrud } from "./views/user/userCrud.js";
import { enterpriseCrud } from "./views/enterprise/enterpriseCrud.js";
import { adminCrud } from "./views/Admin/AdminCrud.js";

const app = express();

const port = 4001;

app.use(cors());
app.use(express.json());

app.use(userCrud);
app.use(adminCrud);
app.use(enterpriseCrud);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
