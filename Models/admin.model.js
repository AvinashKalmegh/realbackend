const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    type : String
})


const AdminModel = mongoose.model("admin", adminSchema);


module.exports = AdminModel;