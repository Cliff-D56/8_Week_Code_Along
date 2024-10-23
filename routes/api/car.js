const express = require('express');
const router = express.Router();

//@route GET api /car
//@desc Test route
//@access Public
router.get('/', (req,res)=>{res.json("Testing car route")});

module.exports = router;