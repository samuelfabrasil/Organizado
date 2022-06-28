const express = require('express')
const router = express.Router()
const Event = require('../models/Event')
const { protectRoute } = require("../auth/protect");
router.get('/', protectRoute, (req, res) => {
  res.render("event", {});
})
// Getting all
router.get('/all',protectRoute, async (req, res) => {
  try {
    const events = await Event.find()
    res.json(events)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id',protectRoute, getEvent, (req, res) => {
  res.json(res.event)
})

// Creating one
router.post('/',protectRoute, async (req, res) => {
  console.log(req.user)
  const event = new Event(req.body)
  try {
    const newEvent = await event.save()
    res.status(201).json(newEvent)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id',protectRoute, getEvent, async (req, res) => {
  for(var prop in req.body){
    res.event[prop] = req.body[prop]
  }
  try {
    const updatedEvent = await res.event.save()
    res.json(updatedEvent)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', protectRoute ,getEvent, async (req, res) => {
  try {
    await res.event.remove()
    res.json({ message: 'Deleted Event' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getEvent(req, res, next) {
  let event
  try {
    event = await Event.findById(req.params.id)
    if (event == null) {
      return res.status(404).json({ message: 'Cannot find event' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.event = event
  next()
}

module.exports = router