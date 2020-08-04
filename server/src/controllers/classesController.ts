import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';
import { RequestHandler } from 'express';

interface ISchedule {
    weekday: number;
    from: string;
    to: string;
}

interface IFilters {
    subject?: string;
    weekday?: string;
    time?: string;
}

export default class ClassesController {
    index: RequestHandler = async (req, res) => {
        const { subject, weekday, time } = req.query as IFilters;

        if (!subject || !weekday || !time) {
            return res.status(400).json({
                message: 'Missing filters to search classes.',
            });
        }

        try {
            const timeInMinutes = convertHourToMinutes(time);

            const classes = await db('classes')
                .whereExists(function () {
                    this.select('class_schedules.*')
                        .from('class_schedules')
                        .whereRaw(
                            '`class_schedules`.`class_id` = `classes`.`id`',
                        )
                        .whereRaw('`class_schedules`.`weekday` = ??', [
                            Number(weekday),
                        ])
                        .whereRaw('`class_schedules`.`from` <= ??', [
                            timeInMinutes,
                        ])
                        .whereRaw('`class_schedules`.`to` > ??', [
                            timeInMinutes,
                        ]);
                })
                .where('classes.subject', '=', subject)
                .join('users', 'classes.user_id', '=', 'users.id')
                .select('classes.*', 'users.*');

            return res.json(classes);
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                message: 'Unexpected error on listing classes.',
            });
        }
    };

    create: RequestHandler = async (req, res) => {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule,
        } = req.body;

        const trx = await db.transaction();

        try {
            const insertedUsersId = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            const user_id = insertedUsersId[0];

            const insertedClassesId = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });

            const class_id = insertedClassesId[0];

            const classSchedule = schedule.map((item: ISchedule) => {
                return {
                    class_id,
                    weekday: item.weekday,
                    from: convertHourToMinutes(item.from),
                    to: convertHourToMinutes(item.to),
                };
            });

            await trx('class_schedules').insert(classSchedule);

            await trx.commit();

            return res.status(201).send();
        } catch (error) {
            await trx.rollback();

            console.error(error);
            return res.status(400).json({
                message: 'Unexpected error while creating new class.',
            });
        }
    };
}
