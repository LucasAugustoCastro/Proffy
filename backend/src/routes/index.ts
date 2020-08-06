import {Router} from 'express'
import ClassesController from '../controllers/ClassesController';
import ConnectionsController from '../controllers/ConnectionsController';

const route = Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();


route.get('/classes', classesController.index);
route.post('/classes', classesController.create);


route.post('/connections', connectionsController.create);

route.get('/connections', connectionsController.index);


export default route;