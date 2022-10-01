const express = require('express');
const crypto = require('crypto');
const connection = require('../database/connect');
const routes = express.Router();

routes.post("/users", async (request,response) => {
    const {name,email,birth} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('users').insert({
        id,
        name,
        email,
        birth,

    })

    return response.json({ id });
});

module.exports = routes;