const BopModel = require("../Models/bop.model");

const getBopRate = async (req, res) => {
    try {
      const data = await BopModel.find();
      return res.status(200).json({ result: data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const patchBop = async (req, res) => {
    try {
      const { id } = req.params;
  
     
      const updatedData = await BopModel.findByIdAndUpdate(id, req.body, { new: true });
  
      return res.status(200).json({ result: updatedData });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  

  module.exports = {getBopRate,patchBop};