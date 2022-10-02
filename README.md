# NASA-APP-CHALLANGE

API documentation for front-end development

All resṕonses is in JSON,

login route
/enter/:id   : you need pass id with params in URL in frontend

//users routes
routes.get("/users", userController.seeAllUser); see all users
routes.post("/users", userController.createUser); create new user

//experiments routes
routes.get("/experience", experimentsController.seeAllXp); see all experiments
routes.get("/profile-experiment", profileController.seeOnly); see data the user
routes.post("/createNewExperiment", experimentsController.createXp); create new experiments
routes.delete("/deleteExperiment/:id",experimentsController.deleteXp); delete experiments

//tutorialsController
routes.get("/tutorial", tutorialsController.seeAllTutorials); see all tutorials
routes.get("/profile-experiment", profileController.seeOnlyTuto); see only data user
routes.post("/tutorial", tutorialsController.createTutorial); create new tutorials
routes.delete("/deleteTutorial/:id",tutorialsController.deleteTutorial); delete a tutorial

routes.get("/feed", feedController.seeAllposts);  see feed  
routes.get("/myFeed", profileController.seeOnlyPost); see your post
routes.post("/feed", feedController.createPost);  create a new post
routes.delete("/deleteFeed/:id",feedController.deletePost);  delete post 
