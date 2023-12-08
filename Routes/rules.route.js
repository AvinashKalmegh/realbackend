const express = require("express");
const { getRules, postRules } = require("../Controllers/rules.controller");

const RulesRouter = express.Router();


RulesRouter.get("/",getRules);
RulesRouter.post("/addrules",postRules);


module.exports = RulesRouter;