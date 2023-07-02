import express from 'express';
import sharp from 'sharp';
import path from 'path';

const getImage = express.Router();

getImage.get('/', (req, res) => {
  const imagePath = path.join(
    __dirname,
    `../../../${req.query.name ? req.query.name : 'camel'}.png`
  );
  res.status(200).sendFile(imagePath);
});

export default getImage;
