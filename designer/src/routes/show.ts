import express, { Request, Response } from 'express';
import { Window } from '../models/window';

// Import authentication and validation
import { requireAuth } from '@nrlamak/common';

import { NotFoundError } from '@nrlamak/common';

const router = express.Router();

router.get('/api/designs/:id', requireAuth, async (req: Request, res: Response) => {
    const window = await Window.findById(req.params.id);

    if (!window) {
        throw new NotFoundError();
    }

    res.send(window);
});

export { router as showWindowRouter };