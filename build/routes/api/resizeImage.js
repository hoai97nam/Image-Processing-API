"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const resizeImage = express_1.default.Router();
resizeImage.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imagePath = path_1.default.join(__dirname, `../../../${req.query.name ? req.query.name : 'camel'}.png`);
    if (req.query.hasOwnProperty('width') && req.query.hasOwnProperty('height')) {
        const outputImage = path_1.default.join(__dirname, `../../../changes/${req.query.name}-${req.query.width}x${req.query.height}-resized.png`);
        const width = Number(req.query.width);
        const height = Number(req.query.height);
        yield resizeImageFunc(imagePath, outputImage, width, height);
        res.status(200).sendFile(outputImage);
    }
    else {
        res.status(200).sendFile(imagePath);
    }
}));
const resizeImageFunc = (imagePath, outputImage, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sharp_1.default)(imagePath).resize(width, height).toFile(outputImage);
        console.log('Image resized successfully');
    }
    catch (error) {
        console.log('Image resized fail');
    }
});
exports.default = resizeImage;
