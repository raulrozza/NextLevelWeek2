import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () =>
    console.log(`Server running at port ${process.env.PORT}`),
);
