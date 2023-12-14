const RulesModel = require("../Models/rules.model");

const getRules = async (req, res) => {
  try {
    const dealStatusRules = await RulesModel.findOne();
    return res.status(200).json({ result: dealStatusRules });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


const postRules = async (req, res) => {
  try {
      const { dealStatus, pricingTier, sqFtRange, cre, escalator } = req.body;

      const newRule = new RulesModel({
          dealStatus: new Map(dealStatus.map(entry => [entry.key, entry.value])),
          pricingTier: new Map(pricingTier.map(entry => [entry.key, entry.value])),
          sqFtRange: new Map(sqFtRange.map(entry => [entry.key, entry.value])),
          cre,
          escalator,
      });

      const savedRule = await newRule.save();
      res.status(201).json(savedRule);
  } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Failed to save data' });
  }
};


// Endpoint to update existing data based on ID
const patchRules = async (req, res) => {
  try {
      const { dealStatus, pricingTier, sqFtRange, cre, escalator } = req.body;
      const { id } = req.params;

      const existingRule = await RulesModel.findById(id);

      if (!existingRule) {
          return res.status(404).json({ error: 'Rule not found' });
      }

      // Update the existingRule fields with new data
      existingRule.dealStatus = new Map(dealStatus.map(entry => [entry.key, entry.value]));
      existingRule.pricingTier = new Map(pricingTier.map(entry => [entry.key, entry.value]));
      existingRule.sqFtRange = new Map(sqFtRange.map(entry => [entry.key, entry.value]));
      existingRule.cre = cre;
      existingRule.escalator = escalator;

      const updatedRule = await existingRule.save();

      res.status(200).json(updatedRule);
  } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).json({ error: 'Failed to update data' });
  }
};






module.exports = { getRules, postRules, patchRules };

  
