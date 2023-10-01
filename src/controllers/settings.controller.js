const Settings = require("../models/settings.model");

const getSettings = async (req, res) => {
    try {
        
        Settings.exists({name:'darkmode'}, function (err, doc) {
            if (err){
                console.log(err)
            }else{
                console.log("Result :", doc) // false
                res.status(200).json(doc);
            }
        });

        // const settings = await Settings.find();
        // res.status(200).json(settings);
    } catch (error) {
      res.status(500).json(error);
    }
};

// const getSettings = async (req, res) => {
//     try {
//       const settings = await Settings.find();
//       res.status(200).json(settings);
//     } catch (error) {
//       res.status(500).json(error);
//     }
// };

const createSetting = async (req, res) => {
    try {
        
        // const product = await Product.findById(req.params.id);
        
        // const result = await Settings.exists({name: req.body.name});
        // if(result == null){
        //     const settings = await Settings.create(req.body);
        //     res.status(201).json(settings);
        // }else{
        //     res.status(304);
        // }

        const settings = await Settings.create(req.body);
        res.status(201).json(settings);
        
    } catch (error) {
      res.status(500).json(error);
    }
  };

const updateSettings = async (req, res) => {
    try {
      const settings = await Settings.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(settings);
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports = {
    getSettings,
    createSetting,
    updateSettings,
};