"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = exports.readFile = void 0;
const fs_1 = __importDefault(require("fs"));
const fsPromises = fs_1.default.promises;
function readFile(filePath) {
    return fsPromises.readFile(filePath, 'utf8');
}
exports.readFile = readFile;
;
function writeFile(writefile, filePath) {
    return fsPromises.writeFile(filePath, writefile, "utf8");
}
exports.writeFile = writeFile;
;
