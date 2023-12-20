const express = require("express");
const {getBopRate, patchBop, postBop, getBopByLookup} = require("../Controllers/bop.controller");

const BopRouter = express.Router();


BopRouter.get("/",getBopRate);
BopRouter.patch("/edit",patchBop);
BopRouter.post("/addbop", postBop);
BopRouter.post("/getbylookup",getBopByLookup);


module.exports = BopRouter;