const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes')
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);



try {
    console.log("Server Local Online in the door :3333")
    app.listen(3333);
} catch (error) {
    "Error, please restart again"
}
