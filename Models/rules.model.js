const mongoose = require("mongoose");

const RulesSchema = mongoose.Schema([

    {
        dealStatus: {
            "Office": String,
            "Hospitality": String,
            "ParkingGarage": String,
            "Healthcare": String,
            "HigherEd": String,
            "Government": String,
            "Industrial": String,
            "Enterprise": String,
            "Manufacturing": String,
            "MixedUse": String,
            "Retail": String,
            "Residential": String,
            "PublicVenue": String,
        },
        pricingTier: {
            "South": String,
            "Southeast": String,
            "Northeast": String,
            "Midwest": String,
            "Northwest": String,
            "West": String,
        },
        sqFtRange:{
            "lt250001" :String,
            "gt250000andlt500001" : String,
            "gt500000andlt1000001" : String,
            "gt1000000andlt1500001" :String,
            "gt1500000andlt2000001" : String,
            "gt2000000" : String
        },
        bopRate:[{
            "Lookup" : String,
            "Term": String,
            "BuildingOwnerRate/SF":String
        }]
    }
])


const DealStatusModel = mongoose.model("rules", RulesSchema);


module.exports = DealStatusModel;