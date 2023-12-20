const express = require("express");
const { postDependencies, getDependencies, patchDependencies } = require("../Controllers/dependencies.controller");

const DependeciesRouter = express.Router();



DependeciesRouter.post("/add", postDependencies);
DependeciesRouter.get("/",getDependencies);
DependeciesRouter.patch("/edit",patchDependencies);

module.exports = DependeciesRouter;