const DealStatusModel = require("../Models/rules.model");

const getRules = async (req, res) => {
  try {
    const dealStatusRules = await DealStatusModel.findOne();
    return res.status(200).json({ result: dealStatusRules });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postRules = async (req, res) => {
    try {
      const {
        dealStatus,
        pricingTier,
        sqFtRange,
        bopRate
      } = req.body;
  
      // Create a new rules entry
      const newRule = new DealStatusModel({
        dealStatus,
        pricingTier,
        sqFtRange,
        bopRate
      });
  
      // Save the new rule to the database
      await newRule.save();
  
      // Return success response
      return res.status(201).json({ message: 'Rules added successfully.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
module.exports = { getRules, postRules };
