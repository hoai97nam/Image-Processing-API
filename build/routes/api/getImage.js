"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const getImage = express_1.default.Router();
getImage.get('/', (req, res) => {
    const imagePath = path_1.default.join(__dirname, `../../../${req.query.name ? req.query.name : 'camel'}.png`);
    res.status(200).sendFile(imagePath);
});
exports.default = getImage;
