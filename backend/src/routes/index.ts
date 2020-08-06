import {Router} from 'express'
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

const route = Router();


interface ScheduleItem {
  week_day: string;
  from: string;
  to: string;
}


route.post('/classes', async (request, response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body;

  const trx = await db.transaction();

  try {
    const insertedUsersIds = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });
  
    const user_id = insertedUsersIds[0]
  
  
    const insertdClassesIds = await trx('classes').insert({
      subject,
      cost,
      user_id,
    });
  
    const class_id = insertdClassesIds[0];
  
    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
      };
    })
  
    await trx('class_schedule').insert(classSchedule)
  
    await trx.commit();
  
    return response.status(201).send();
  } catch (err) {
    await trx.rollback();
    return response.status(400).json({
      error: 'Unexpectes error while crating new class'
    })
  }
});

export default route;