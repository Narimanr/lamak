// file and path from node.js
const fs = require('fs');
const path = require('path');


import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError, currentUser } from '@nrlamak/common';

import { createWindowRouter } from './routes/new';
import { showWindowRouter } from './routes/show';
import { indexDesignRouter } from './routes';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        // for all environments other than test set secure to true
        secure: process.env.NODE_ENV !== 'test'
    })
);

// add after cookie session to set req.session
app.use(currentUser);

app.use(createWindowRouter);
app.use(showWindowRouter);
app.use(indexDesignRouter);


// handle unknown routes
app.all('*', async (req,res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

// special middleware function that express uses for all the requests
// always has 4 arguments and express knows its for error handling code
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    // if req had files inside and something broke rollback uploaded image
    if (req.file) {
        fs.unlink(req.file.path, (err: any) => {
            console.log(err);
        });
    }
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unkown error occured!' });
});



export { app };