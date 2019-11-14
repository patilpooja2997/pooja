const express = require('express')

var serverRoute=express();

//const app = express()


serverRoute.get('/', (request, response) => {
    response.send('welcome to my application')
})

serverRoute.post('/', (request, response) => {
    response.send('welcome to her application')
})

serverRoute.put('/', (request, response) => {
    response.send('welcome to her application')
})




// serverRoute.listen(4000, () => {
//     console.log(`Server started on port 4000`);
// });
module.exports=serverRoute;