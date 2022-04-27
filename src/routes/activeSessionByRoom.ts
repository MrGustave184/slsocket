import express, { Request, Response } from "express";
import { query, validationResult } from "express-validator";
import { ActiveSessionModel } from "../models/activeSession";

const router = express.Router();

router.get('/api/activeSessionByRoom',
    query('clientId').not().isEmpty().withMessage('please provide a valid client ID'),
    query('projectId').not().isEmpty().withMessage('please provide a valid project ID'),
    query('room').not().isEmpty().withMessage('please provide a valid room'),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array())
            return res.status(400).json({ errors: errors.array() });
        }

        const { clientId, projectId, room } = req.query;
        const activeSession = await ActiveSessionModel.findOne({clientId: clientId, projectId: projectId, room: room });

        res.send({ activeSession });
    }
)

export { router as activeSessionByRoomRouter }
