
import express, { Request, Response } from 'express';
import { body } from 'express-validator';

// Import authentication and validation
import { requireAuth, validateRequest } from '@nrlamak/common';

// Import Ticket Model
import { Window } from '../models/window';

// Import artwork creation event publisher
// import { ArtworkCreatedPublisher } from '../events/publishers/artwork-created-publisher';

// Import nats client
import { natsWrapper } from '../nats-wrapper';


const router = express.Router();

router.post('/api/designs', requireAuth, [
    body('windowW').isNumeric().withMessage('Window width must be a number'),
    body('windowH').isNumeric().withMessage('Window height must be a number'),
    body('partition').isNumeric().withMessage('Partition must be a number'),
], validateRequest, async (req: Request, res: Response) => {
    const { windowW, windowH, partition } = req.body;

    // console.log('recived width: ', windowW);
    // console.log('recived height: ', windowH);
    // console.log('recived partition: ', partition);

    const existing = await Window.findOne({
        windowW,
        windowH,
        partition
    });

    if (existing) {
        res.status(200).send(existing);
    }

    else {
        const HINGE_SIZE: number = 40;
        const SASH_MARGIN: number = 25;
        const GLASS_MARGIN: number = 10;
    
        let frameW: number = windowW * 2;
        let frameH: number = windowH * 2;

        let mullion: number = windowH - (HINGE_SIZE * 2);

        
        // console.log("partitionCalc: ", partitionCalc);
        
        // let partitionCalc = partition + 1;
        // let HingeMargin = HINGE_SIZE * partitionCalc;
        // let unpureWidth = windowW - HingeMargin;
        // let finalWidth = unpureWidth / partition;
        // finalWidth = parseFloat(finalWidth.toPrecision(5));
        
        // let sashW: number = finalWidth + SASH_MARGIN;

        let sashCalc = parseFloat(((windowW - (HINGE_SIZE * (partition + 1))) / partition).toPrecision(5));

        let sashW: number = sashCalc + SASH_MARGIN;

        let sashH: number = (windowH - (HINGE_SIZE * 2)) + SASH_MARGIN;

        let sillW: number = sashW;
        let sillH: number = sashH;

        let glassW: number = sillW - GLASS_MARGIN;
        let glassH: number = sillH - GLASS_MARGIN;

        const window = Window.build({
            partition,
            windowH,
            windowW,
            frameH,
            frameW,
            mullion,
            sashH,
            sashW,
            sillH,
            sillW,
            glassH,
            glassW,
            userId: req.currentUser!.id
        });

        await window.save();

        // Emit a new artwork created event
        // await new ArtworkCreatedPublisher(natsWrapper.client).publish({
        //     id: artwork.id,
        //     title: artwork.title,
        //     price: artwork.price,
        //     thumbnail: artwork.title,
        //     gallery: artwork.gallery,
        //     dimensions: artwork.dimensions,
        //     style: artwork.style,
        //     technique: artwork.technique,
        //     category: artwork.category,
        //     frame: artwork.frame,
        //     material: artwork.material,
        //     status: artwork.status,
        //     subject: artwork.subject,
        //     commission: artwork.commission,
        //     editions: artwork.editions,
        //     userId: artwork.userId,
        //     version: artwork.version
        // });
    
        res.status(201).send(window);
    }
});

export { router as createWindowRouter };