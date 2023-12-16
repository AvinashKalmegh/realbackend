const express = require("express");
const { postSaveData, getSaveData } = require("../Controllers/save.controller");

const SaveRouter = express.Router();


SaveRouter.post("/adddata",postSaveData);
SaveRouter.post("/",getSaveData);


module.exports = SaveRouter;