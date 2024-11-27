const express = require('express');
const router = express.Router();
const Signup = require('../schemas/SignupSchema');

router.post('/', async (req, res) => {
    try {
        const user = new Signup({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
        })

        const savedUser = await user.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router;