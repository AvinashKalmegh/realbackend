const mongoose = require("mongoose");

const RulesSchema = new mongoose.Schema({
    dealStatus: {
        type: Map,
        of: String,
    },
    pricingTier: {
        type: Map,
        of: Number,
    },
    sqFtRange: {
        type: Map,
        of: String,
    },
    cre: {
        type: Number,
    },
    escalator: {
        type: Number,
    },
    classOfService :{
        type:Map,
        of: String
    },
    service:{
        type:Map,
        of:String
    },
    dealType:{
        type:Map,
        of:String
    },
    financialModel:{
        type:Map,
        of:String
    }
});

const RulesModel = mongoose.model("rules", RulesSchema);

module.exports = RulesModel;







// const mongoose = require("mongoose");

// const RulesSchema = mongoose.Schema(

//     {
//         dealStatus: {
//             "Office": String,
//             "Hospitality": String,
//             "ParkingGarage": String,
//             "Healthcare": String,
//             "HigherEd": String,
//             "Government": String,
//             "Industrial": String,
//             "Enterprise": String,
//             "Manufacturing": String,
//             "MixedUse": String,
//             "Retail": String,
//             "Residential": String,
//             "PublicVenue": String,
//         },
//         pricingTier: {
//             "South": Number,
//             "Southeast": Number,
//             "Northeast": Number,
//             "Midwest": Number,
//             "Northwest": Number,
//             "West": Number,
//         },
//         sqFtRange: {
//             "lt250001": String,
//             "gt250000andlt500001": String,
//             "gt500000andlt1000001": String,
//             "gt1000000andlt1500001": String,
//             "gt1500000andlt2000001": String,
//             "gt2000000": String
//         },
//         cre:{"cre":Number} ,
//         escalator:{"escalator": Number}

//     }
// )


// const DealStatusModel = mongoose.model("rules", RulesSchema);


// module.exports = DealStatusModel;