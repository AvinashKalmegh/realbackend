const DependenciesModel = require("../Models/dependecies.model");


const getDependencies = async (req, res) => {
    try {
      const data = await DependenciesModel.find();
      return res.status(200).json({ result: data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

const postDependencies = async (req, res)=>{
    try {
      let payload = req.body;
      console.log(payload);
      let data = new DependenciesModel(payload);
      data = await data.save();
      return res.status(201).json({"result": data});

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }


  const patchDependencies = async (req, res) => {
    try {
      const { fieldToUpdate, objectToAdd } = req.body; // Assuming frontend sends fieldToUpdate and objectToAdd
  
      if (!fieldToUpdate || !objectToAdd) {
        return res.status(400).json({ error: 'FieldToUpdate and ObjectToAdd are required.' });
      }
  
      const data = await DependenciesModel.findOne(); // Assuming you're updating the first document found
  
      if (!data) {
        return res.status(404).json({ error: 'Data not found.' });
      }
  
      // Check if the fieldToUpdate exists
      if (data[fieldToUpdate]) {
        // Find if the key of the object is already present
        const existingIndex = data[fieldToUpdate].findIndex(
          (obj) => Object.keys(obj)[0] === Object.keys(objectToAdd)[0]
        );
  
        if (existingIndex !== -1) {
          // Replace the object if the key already exists
          data[fieldToUpdate][existingIndex] = objectToAdd;
        } else {
          // Add a new key-value pair if the key doesn't exist
          data[fieldToUpdate].push(objectToAdd);
        }
      } else {
        return res.status(400).json({ error: 'Invalid fieldToUpdate.' });
      }
  
      await data.save();
      return res.status(200).json({ result: data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  

  module.exports = {postDependencies,getDependencies,patchDependencies};