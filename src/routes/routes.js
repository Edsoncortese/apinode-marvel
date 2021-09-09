const routes = require("express").Router();

const PersonagemController = require("../controllers/PersonagensController");
const PersonagemMiddleware = require("../middlewares/PersonagemMiddlewares");

routes.get("/personagens", PersonagemController.getAll);
routes.get("/personagens/:id", PersonagemMiddleware.validaID, PersonagemController.getById)


module.exports = routes