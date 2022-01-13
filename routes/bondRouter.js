// import the controller functions
const bondController = require('../controllers/bondController.js');


// create a Router object from express
const router = require('express').Router()

// add a new customer to the table
router.post('/', bondController.addBond)

// access all the Bonds in the table
router.get('/', bondController.getAllBonds)

// access one Bond by id
router.get('/:id', bondController.getOneBond)

// modify one Bond by id
router.put('/:id', bondController.updateBond)

// delete one Bond by id
router.delete('/:id', bondController.deleteBond)

module.exports = router