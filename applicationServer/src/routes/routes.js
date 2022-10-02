const express = require('express');
const userController = require('./../controllers/userController')

const routes = express.Router();

routes.get("/users", userController.seeAllUser)
routes.post("/users", userController.createUser);

module.exports = routes;