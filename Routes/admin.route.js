const express = require("express");
const { adminSignin, adminSignup, getData, deleteData } = require("../Controllers/admin.controller");

const AdminRouter = express.Router();


AdminRouter.post("/signin",adminSignin);
AdminRouter.post("/signup",adminSignup);
AdminRouter.get("/list",getData);
AdminRouter.delete("/list/:id",deleteData);

module.exports = AdminRouter;