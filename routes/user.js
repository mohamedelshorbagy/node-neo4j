import * as express from 'express';
import { ctrls as userCtrls } from '../app/controllers/user';

const { all } = userCtrls;

const router = express.Router();

router.get('/findRelationship/:name', all);


export default router;