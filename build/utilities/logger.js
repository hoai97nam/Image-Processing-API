"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    const url = req.baseUrl;
    console.log(`${new Date()}-${url} was called`);
    next();
};
exports.default = logger;
