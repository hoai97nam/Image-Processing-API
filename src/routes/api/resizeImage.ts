import express, { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import promises from 'fs';

const resizeImage = express.Router();

resizeImage.get('/', async (req: Request, res: Response) => {
  if (
    req.query.hasOwnProperty('filename') &&
    req.query.hasOwnProperty('width') &&
    req.query.hasOwnProperty('height')
  ) {
    const originalImage = path.join(__dirname, `../../../camel.png`);
    const imagePath = path.join(
      __dirname,
      `../../../changes/${req.query.filename}-${req.query.width}-${req.query.height}.png`
    );

    try {
      await promises.accessSync(imagePath, promises.constants.F_OK);
      console.log('File exists');
      return res.status(200).sendFile(imagePath);
    } catch (err) {
      console.log('File does not exist');
      const width = Number(req.query.width);
      const height = Number(req.query.height);
      await resizeImageFunc(originalImage, imagePath, width, height);
      return res.status(200).sendFile(imagePath);
    }
  } else {
    return res.status(400);
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
