const express = require('express')

var serverroute=require("./index");

const app = express()


app.get('/', (request, response) => {
    response.send('welcome to my application')
})

app.post('/', (request, response) => {
    response.send('welcome to her application')
})


app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});