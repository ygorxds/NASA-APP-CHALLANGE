const express = require('express');
const userController = require('./../controllers/userController');
const experimentsController = require("./../controllers/experimentController");
const profileController = require("./../controllers/profileController")

const routes = express.Router();

//users routes
routes.get("/users", userController.seeAllUser);
routes.post("/users", userController.createUser);

//experiments routes
routes.get("/experience", experimentsController.seeAllXp);
routes.get("/profile-experiment", profileController.seeOnly);
routes.post("/createNewExperiment", experimentsController.createXp);
routes.delete("/deleteExperiment/:id",experimentsController.deleteXp);

module.exports = routes;