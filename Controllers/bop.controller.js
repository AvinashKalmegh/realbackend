const BopModel = require("../Models/bop.model");

const getBopRate = async (req, res) => {
    try {
      const data = await BopModel.find();
      return res.status(200).json({ result: data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const getBopByLookup = async (req, res) => {
    try {
      // Get the array of Lookups from the request body
      const lookupValues = req.body;
  
      // Find data by the provided 'Lookup' values
      const data = await BopModel.find({ Lookup: { $in: lookupValues } });
      console.log(data);
      if (data.length > 0) {
        return res.status(200).json({ result: data });
      } else {
        return res.status(404).json({ message: 'No data found for the provided Lookups.' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  

  // const patchBop = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  
     
  //     const updatedData = await BopModel.findByIdAndUpdate(id, req.body, { new: true });
  
  //     return res.status(200).json({ result: updatedData });
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // };

  // const postBop = async (req, res)=>{
  //   try {
  //     let payload = req.body;
  //     console.log(payload);
  //     let data = await BopModel.insertMany(payload);
  //     return res.status(201).json({"result": data});

  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }

  const patchBop = async (req, res) => {
    try {
      const payload = req.body;
  
      // Initialize an array to store update operations
      const updateOperations = payload.map((item) => ({
        updateOne: {
          filter: { Lookup: item.Lookup },
          update: { $set: { BuildingOwnerRateSF: item.BuildingOwnerRateSF } },
        },
      }));
  
      // Bulk update using updateMany
      const bulkUpdateResult = await BopModel.bulkWrite(updateOperations);
  
      return res.status(200).json({ result: bulkUpdateResult });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  
  
  const postBop = async (req, res) => {
    try {
      let payload = req.body;
  
      // Check for existing data based on the 'Lookup' field
      const existingData = await BopModel.find({ Lookup: { $in: payload.map(item => item.Lookup) } });
  
      // Extract existing 'Lookup' values
      const existingLookups = existingData.map(item => item.Lookup);
  
      // Filter out payload items that are not already present
      const newData = payload.filter(item => !existingLookups.includes(item.Lookup));
  
      // Insert only the new data into the database
      if (newData.length > 0) {
        let insertedData = await BopModel.insertMany(newData);
        return res.status(201).json({ result: insertedData });
      } else {
        return res.status(200).json({ message: 'No new data to add.' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  

  module.exports = {getBopRate,patchBop, postBop, getBopByLookup};