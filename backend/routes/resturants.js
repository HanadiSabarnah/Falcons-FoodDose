const express = require('express')
const router = express.Router()
const Restaurant = require('../models/Resturant')

router.post('/createRes', (req, res) => {

    let restau = new Restaurant({
      resCategory: req.body.resCategory,
      Name: req.body.Name,
      Image: req.body.Image,
      Phone: req.body.Phone,
      Address: req.body.Address
    })
    restau.save((err, restau) => {
      if (err) return res.status(404).json({error:err})
      res.json(restau)
    })
  })
  
  
  //find  restaurant  by name 
  router.post('/restFind', (req, res) => {
    Restaurant.findOne({ Name: req.body.Name })
      .populate('resCategory')
      .exec((err, rest) => {
        if (err) return res.status(404).json({ success: false })
        res.json(rest)
      })
  })
  
  //find  restaurant  by id
  router.post('/restFindById', (req, res) => {
    Restaurant.findOne({ _id: req.body._id })
      .populate('resCategory')
      .exec((err, rest) => {
        if (err) return res.status(404).json({ success: false })
        res.json(rest)
      })
  })
  
  
  //find  restaurants  by  category id
  router.post('/FindAllResById', (req, res) => {
    Restaurant.find({ resCategory: req.body.resCategory })
      .populate('resCategory')
      .exec((err, rest) => {
        if (err) return res.status(404).json({ success: false })
        res.json(rest)
      })
  })

  router.post('/restCategoryById/:id', (req, res) => {
    Restaurant.findOne({ _id: req.body._id })
      .populate('resCategory')
      .exec((err, rest) => {
        if (err) return res.status(404).json({ success: false })
        res.json(rest)
      })
  });

  


module.exports = router