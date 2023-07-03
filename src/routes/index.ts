import express, { Request, Response } from 'express';
import resizeImage from './api/resizeImage';
import logger from '../utilities/logger';

const routes = express.Router();

routes.use('/resizeImage', logger, resizeImage);

export default routes;
