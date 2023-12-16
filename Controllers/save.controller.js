const SaveModel = require("../Models/save.model");


const getSaveData = async (req, res) => {
    try {
      let payload = req.body
      let data = await SaveModel.find({userId: payload.userId});
      
      res.status(201).json({ result: data });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Failed to get data' });
    }
  };

const postSaveData = async (req, res) => {
  try {
    const payload = req.body;
    // console.log(payload.data);
    // Fetch existing data from the database
    // let existingData = await SaveModel.findOne();

    // If no existing data is found, create a new record
    // if (!existingData) {
    //   existingData = new SaveModel({ data: [] });
    // }

    // for(let i=0;i<payload.data.length;i++){
    //     existingData.data.push(payload.data[i]);

    // }
    // Append the new payload to the existing array

    let data = await SaveModel(payload);
    // Save the updated data
    data = await data.save();
    // existingData = await existingData.save();
    res.status(201).json({ result: data });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
};

module.exports = {getSaveData,postSaveData};
