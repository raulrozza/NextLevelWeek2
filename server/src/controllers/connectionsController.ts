import { RequestHandler } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
    index: RequestHandler = async (req, res) => {
        try {
            const totalConnections = await db('connections').count(
                '* as total',
            );

            const { total } = totalConnections[0];

            return res.json({ total });
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                message: 'Unexpected error',
            });
        }
    };

    create: RequestHandler = async (req, res) => {
        const { user_id } = req.body;

        try {
            await db('connections').insert({ user_id });

            return res.status(201).send();
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                message: 'Unexpected error',
            });
        }
    };
}
