const express = require('express');
const router = express.Router();
const Login = require('../schemas/SignupSchema');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try {
       const {email, password} = req.body;

      const loginUser = await Login.findOne({email});

      if(!loginUser){
        return res.status(404).json('User not found')
      }

      const isMatch = await bcrypt.compare(password, loginUser.password);

      if(isMatch){
        return res.status(200).json('User logged in') 
      }else{
        res.status(400).json("Invalid credentials")
      }
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router;