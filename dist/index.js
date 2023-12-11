"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuracion the .env file
dotenv_1.default.config();
// creamos express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// definimos la primera ruta de app
app.get('/', (req, res) => {
    //send hello world
    res.send('<h1>Welcome to my Api RestFull App Express + TS +Nodemon + Jest + swagger</h1>');
});
app.get('/hello', (req, res) => {
    res.send("<h1>Hola ruta scott</h1>");
});
// ! esta mi ruta crea por mi mismo xd
app.get('/scott', (req, res) => {
    res.send("Welcome to GET Route: !Hello¡");
});
//Execute app and listen 
app.listen(port, () => {
    console.log(`Expres server : runnig at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map