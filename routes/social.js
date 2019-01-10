import * as express from 'express';
import { ctrls as foodCtrls } from '../app/controllers/social';

const { all } = foodCtrls;

const router = express.Router();




router.get('/getAttached/:name', all);


export default router;