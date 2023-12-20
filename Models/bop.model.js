const mongoose = require("mongoose");

const bopSchema = mongoose.Schema({
    Lookup: String,
    Term: Number,
    BuildingOwnerRateSF: String

})


const BopModel = mongoose.model("sample", bopSchema);


module.exports = BopModel;