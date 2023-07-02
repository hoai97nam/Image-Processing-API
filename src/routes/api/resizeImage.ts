import express from 'express';
import sharp from 'sharp';
import path from 'path';

const resizeImage = express.Router();

resizeImage.post('/', async (req, res) => {
  const imagePath = path.join(
    __dirname,
    `../../../${req.query.name ? req.query.name : 'camel'}.png`
  );

  if (req.query.hasOwnProperty('width') && req.query.hasOwnProperty('height')) {
    const outputImage = path.join(
      __dirname,
      `../../../changes/${req.query.name}-${req.query.width}x${req.query.height}-resized.png`
    );

    const width = Number(req.query.width);
    const height = Number(req.query.height);

    await resizeImageFunc(imagePath, outputImage, width, height);
    res.status(200).sendFile(outputImage);
  } else {
    res.status(200).sendFile(imagePath);
  }
});

export const resizeImageFunc = async (
  imagePath: string,
  outputImage: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    await sharp(imagePath).resize(width, height).toFile(outputImage);
    console.log('Image resized successfully');
  } catch (error) {
    console.log('Image resized fail');
  }
};

export default resizeImage;
