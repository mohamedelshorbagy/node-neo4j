import socialRoutes from './social';
import userRoutes from './user';



export default (app) => {
    app.use('/api/social', socialRoutes);
    app.use('/api/user', userRoutes);


}


