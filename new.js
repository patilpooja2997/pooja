const express = require('express')

NewRouter=express();



//const app = express()


NewRouter.get('/', (request, response) => {
    response.send('welcome to my application')
})

NewRouter.post('/', (request, response) => {
    response.send('welcome to her application')
})

NewRouter.put('/', (request, response) => {
    response.send('welcome to her application')
})

module.exports=NewRouter;

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});