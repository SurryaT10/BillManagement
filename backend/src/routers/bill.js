const express = require('express')
const Bill = require('../models/bill')
const auth = require('../middleware/userAuth')
const router = express.Router()

router.post('/bills', auth, async (req, res) => {
    const bill = new Bill({
        ...req.body, 
        owner: req.user._id
    })
    try {
        await bill.save()
        res.status(201).send(bill)
    }catch(e) {
        res.status(400).send(e)
    }
})

router.get('/bills', auth, async (req, res) => {
    try {
        const bills = await Bill.find({owner: req.user._id})
        res.send(bills)
    }catch(e) {
        res.status(500).send(e)
    }
})

router.get('/bills/me', auth, async (req, res) => {
    try {
        const user = req.user
        const bill = await Bill.findOne({owner: user._id})
        console.log(bill)
        res.send(bill)
    }catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/bills/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['unitsUsed', 'billAmount', 'district']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid operation'})
    }

    try {
        const bill = await  Bill.findOne({_id: req.params.id, owner: req.user._id})

        if(!bill) {
            return res.status(404).send({error: 'Invalid operation'})
        }

        updates.forEach((update) => bill[update] = req.body[update])
        await bill.save()

        res.send(bill)
    }catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/bills/:id', auth, async (req, res) => {
    try {
        const bill = await Bill.findOneAndDelete({_id: req.params.id, owner: req.user._id})
        if(!bill) {
            return res.status(404).send({error: 'nothing found'})
        }
        res.send(bill)

    }catch(e) {
        res.status(500).send(e)
    }
})
module.exports = router