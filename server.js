import * as express from 'express';
import * as mongoose from 'mongoose';
import Config from './config/config';
import expressMiddlewares from './config/express';
import appRoutes from './routes/index';
import db from './config/db';
const app = express();
const { PORT } = Config;



expressMiddlewares(app);
// dbInit(ne4jDB);
appRoutes(app);




app.listen(PORT, () => {
    console.log(`App is running at: localhost:${PORT}`)
})



