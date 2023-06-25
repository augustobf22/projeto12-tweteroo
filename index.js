import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// Todas as rotas que forem criadas daqui para baixo poderão ser
// acessadas através de um front-end