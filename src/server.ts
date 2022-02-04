import * as express from "express";

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(PORT, () => {
    console.log(`🚀  Connect PORT: ${PORT}`);
});