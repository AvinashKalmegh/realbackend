const mongoose = require("mongoose");

const saveSchema = mongoose.Schema({
     projectName:String,
     address:String,
     vertical:String,
     region:String,
     numberOfBuildings:String,
     projectSize:String,
     labourImpact:String,
     conduitRequired:String,
     sqFtRange:String,
     tier:String,
     dealStatus:String,
     classOfService:String,
     service:String,
     dealType:String,
     financialModel:String,
     term:String,
     prePaymentPercent:String,
     date:String,
     obj:Object,
     userId: {type: mongoose.Schema.Types.ObjectId, ref: "admin"},
})


const SaveModel = mongoose.model("save", saveSchema);


module.exports = SaveModel;