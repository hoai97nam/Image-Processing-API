import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const url = req.baseUrl;
  console.log(`${new Date()}-${url} was called`);
  next();
};

export default logger;
