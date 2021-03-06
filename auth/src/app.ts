import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler,NotFoundError } from '@nrlamak/common';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

const app = express();
// traffic is being proxied through nginx
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        // for all environments other than test set secure to true
        secure: process.env.NODE_ENV !== 'test'
    })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// handle unknown routes
app.all('*', async (req,res) => {
    throw new NotFoundError();
});

app.use(errorHandler);


export { app };