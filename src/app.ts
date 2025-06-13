import express from 'express';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

app.use(express.json());

// Routes
// app.use('/api/users', userRoutes);

// Middleware d'erreur (global)
app.use(errorHandler);

export default app;
