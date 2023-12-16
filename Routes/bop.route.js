const express = require("express");
const {getBopRate, patchBop} = require("../Controllers/bop.controller");

const BopRouter = express.Router();


BopRouter.get("/",getBopRate);
BopRouter.patch("/edit/:id",patchBop)


module.exports = BopRouter;