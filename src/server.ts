import * as express from "express";
import connectionOptions from "./database/config";
import { createConnection } from "typeorm";

const app = express();
const PORT = 8080;

createConnection(connectionOptions).then( () => {
    console.log(`✅ DB Connetion Success`);
}).catch(error=> {
    console.log(`❌Error: ${error}`);
});

app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(PORT, () => {
    console.log(`🚀  Connect PORT: ${PORT}`);
});