const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

router.post('/createCat', (req, res) => {
    console.log(req.body)
    let categ = new Category({
      Name: req.body.catName,
      Image: req.body.catImg
    })
    categ.save((err, categ) => {
      if (err) return res.status(404).json({ error })
      res.status(201).json({ id: categ._id })
    })
  })


module.exports = router