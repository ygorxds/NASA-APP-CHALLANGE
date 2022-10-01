const express = require('express');
const app = express();

app.get("/", (request,response) => {
    return response.send("funcionou")
});


console.log('Server online in the port :3333')
app.listen(3333);