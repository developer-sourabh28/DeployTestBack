const express = require('express');
const router = express.Router();
const Visit = require('../schemas/VisitSchema');

router.post('/', async (req, res) => {
    console.log('Request Body:', req.body); // Log incoming request body
    try {
        if (!req.body.place) {
            return res.status(400).json({ error: 'place is required' });
        }
        const CreateMemory = new Visit({
            place: req.body.place,
            memory : req.body.memory,
            writter : req.body.writter,
        });

        const savedMemory = await CreateMemory.save();
        res.status(200).json(savedMemory);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const GetMemory = await Visit.find();

        if(!GetMemory.length){
            return res.status(404).json({message : 'No memories found'})
        }else{
            res.status(200).json(GetMemory)
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;