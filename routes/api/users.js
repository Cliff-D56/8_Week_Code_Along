const express = require('express');
const router = express.Router();

//@route GET api /users
//@desc Test route
//@access Public
router.get('/', (req,res)=>{
    res.json("Testing users route")
});
 
module.exports = router;