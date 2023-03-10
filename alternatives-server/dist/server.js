"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const { getTest, postRequest, getFruit, patchFruit, } = require("./routes/health.controller");
dotenv_1.default.config();
function setupServer() {
    const app = (0, express_1.default)();
    //middleware
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.get("/fruits", getFruit);
    app.get("/home/:uId", getTest);
    app.post("/post/:uId", postRequest);
    app.patch("/post/edit/:uId", patchFruit);
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default.connect("mongodb://localhost:27017/alternatives");
    const connection = mongoose_1.default.connection;
    connection.once("open", () => {
        console.log("MongoDB has connected");
    });
    return app;
}
exports.default = setupServer;
