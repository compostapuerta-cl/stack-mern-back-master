import express, { Express,Request,Response } from "express";
import dotenv from "dotenv"

//configuracion the .env file
dotenv.config();

// creamos express app

const app: Express = express();
const port: number | string = process.env.PORT || 8000;

// definimos la primera ruta de app

app.get('/', (req:Request,res:Response) =>{
    //send hello world
    res.send('<h1>Welcome to my Api RestFull App Express + TS +Nodemon + Jest + swagger</h1>')
})

app.get('/hello', (req:Request , res:Response ) =>{
    res.send("<h1>Hola ruta scott</h1>")
})

// ! esta mi ruta crea por mi mismo xd
app.get('/scott', (req:Request , res:Response ) =>{
    res.send("Welcome to GET Route: !Hello¡")
})

//Execute app and listen 

app.listen(port, () => {
    console.log(`Expres server : runnig at http://localhost:${port}`)
})

