// require the db created in the index file
const db = require("../models/index");

// get the customers model
const Bond = db.Bonds;

const addBond = async (req, res) => {
  let input_data = {
    faceValue: req.body.faceValue,
    couponRate: req.body.couponRate,
    couponDate: req.body.couponDate,
    maturityDate: req.body.maturityDate,
    issuePrice: req.body.issuePrice,
  };
  // using the builtin 'create' function on Customer Model
  const bond = await Bond.create(input_data);

  // send a 200 response with the created entry
  res.status(200).send(bond);
};

const getAllBonds = async (req, res) => {

    // using the builtin 'findOne' function on Customer Model
    let bonds = await Bond.findAll({})
    res.status(200).send(bonds)
} 

const getOneBond = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Customer Model
    let bonds = await Bond.findOne({where: {id: id}})
    res.status(200).send(bonds)
    }


    const updateBond = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'update' function on Customer Model
        const bond = await Bond.update(req.body, { where: {id: id}})
        res.status(200).send(bond)
    }

    const deleteBond = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'destroy' function on Customer Model
        await Bond.destroy({where :{id: id}})
        res.status(200).send(`bond with id: ${id} is deleted`)
    }      
               

                        
    // export all the controller functions
module.exports = {
    addBond,
    getAllBonds,
    getOneBond,
    updateBond,
    deleteBond
}