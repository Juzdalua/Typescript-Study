import 'dotenv/config';
import * as express from "express";
import connectionOptions from "./database/config";
import { createConnection } from "typeorm";
import userController from "./controller/userController";

const app = express();
const PORT = 8080;

createConnection(connectionOptions).then( () => {
    console.log(`✅ DB Connetion Success`);
}).catch(error=> {
    console.log(`❌Error: ${error}`);
});

//home
app.get('/', async (req, res) => {
    
    return res.send("hi")
})

//create
app.get('/0', async (req, res) => {
    const response = await userController.createUser();
    console.log(`server: `,response)
    return res.send("hi")
})

//find
app.get('/1', async (req, res) => {
    const response = await userController.findUser();
    console.log(`findOne:`,response)
    return res.send("hi")
})

app.listen(PORT, () => {
    console.log(`🚀  Connect PORT: ${PORT}`);
});