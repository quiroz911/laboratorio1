import express from "express";
import cors from "cors";
import { userCrud } from "./views/user/userCrud.js";
import { enterpriseCrud } from "./views/enterprise/enterpriseCrud.js";
import { adminCrud } from "./views/Admin/AdminCrud.js";
import { projectCrud } from "./views/project/projectCrud.js";
import { issueCrud } from "./views/issue/issueCrud.js";


const app = express();

const port = 4001;

app.use(cors());
app.use(express.json());

app.use(userCrud);
app.use(adminCrud);
app.use(enterpriseCrud);
app.use(projectCrud);
app.use(issueCrud)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
