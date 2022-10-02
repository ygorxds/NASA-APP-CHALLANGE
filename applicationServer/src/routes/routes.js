const express = require('express');
const userController = require('./../controllers/userController');
const profileController = require("./../controllers/profileController");
const sessionController = require("../controllers/sessionController");
const tutorialsController = require("../controllers/tutorialsController");
const experimentsController = require("./../controllers/experimentController");

const routes = express.Router();

//session router validate 
routes.post('/enter', sessionController.create);

//users routes
routes.get("/users", userController.seeAllUser);
routes.post("/users", userController.createUser);

//experiments routes
routes.get("/experience", experimentsController.seeAllXp);
routes.get("/profile-experiment", profileController.seeOnly);
routes.post("/createNewExperiment", experimentsController.createXp);
routes.delete("/deleteExperiment/:id",experimentsController.deleteXp);

//tutorialsController
routes.get("/tutorial", tutorialsController.seeAllTutorials);
routes.get("/profile-experiment", profileController.seeOnlyTuto);
routes.post("/tutorial", tutorialsController.createTutorial);
routes.delete("/deleteTutorial/:id",tutorialsController.deleteTutorial);

module.exports = routes;