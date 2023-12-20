const mongoose = require("mongoose");

const DependenciesSchema = mongoose.Schema({

    classOfService: Array,
    service: Array

})


const DependenciesModel = mongoose.model("dependencies", DependenciesSchema);


module.exports = DependenciesModel;