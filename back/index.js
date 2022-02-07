import express from 'express';
import cors from 'cors';
import { rutasEjemplo } from './views/example/rutas.js';

const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());

app.use(rutasEjemplo);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
