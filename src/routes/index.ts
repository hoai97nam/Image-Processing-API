import express from 'express';
import getImage from './api/getImage';
import resizeImage from './api/resizeImage';
import logger from '../utilities/logger';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('main api route');
});

routes.use('/getImage', logger, getImage);
routes.use('/resizeImage', logger, resizeImage);

export default routes;
