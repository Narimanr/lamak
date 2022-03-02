import express, { Request, Response } from 'express';
import { Window } from '../models/window';

// Import authentication and validation
import { requireAuth } from '@nrlamak/common';

const router = express.Router();

router.get('/api/designs', requireAuth, async (req: Request, res: Response) => {
    const designs = await Window.find();

    res.send(designs);
});

export { router as indexDesignRouter };