/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import { AppError } from '@shared/errors/AppError';
import cors from 'cors';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes';
import '@shared/container';

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

export { app };
