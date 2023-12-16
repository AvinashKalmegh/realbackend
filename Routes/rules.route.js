const express = require("express");
const { getRules, postRules, patchRules } = require("../Controllers/rules.controller");

const RulesRouter = express.Router();


RulesRouter.get("/",getRules);
RulesRouter.post("/addrules",postRules);
RulesRouter.patch("/edit/:id",patchRules);


module.exports = RulesRouter;