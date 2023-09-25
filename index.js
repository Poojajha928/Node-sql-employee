const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3001;
const userRouter = require('./routes/router');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use('/', userRouter);

app.listen(port,()=>{
    console.log("Listening to port");
})