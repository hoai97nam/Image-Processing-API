"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getImage_1 = __importDefault(require("./api/getImage"));
const resizeImage_1 = __importDefault(require("./api/resizeImage"));
const logger_1 = __importDefault(require("../utilities/logger"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('main api route');
});
routes.use('/getImage', logger_1.default, getImage_1.default);
routes.use('/resizeImage', logger_1.default, resizeImage_1.default);
exports.default = routes;
