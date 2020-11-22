const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const auth = require('../middleware')


router.post('/signup', (req, res) => {
    const Password = req.body.Password
    const saltRounds = 10
    let data = req.body

    User.findOne({ Email: req.body.Email })
        .then(user => {
            if (user) return res.json({ message: "email already exists" })

            bcrypt.genSalt(saltRounds)
                .then((salt) => bcrypt.hash(Password, salt))
                .then((hashedPassword) => {
                    data.Password = hashedPassword
                    let user = new User(data)
                    user.save()
                        .then((data) => jwt.sign({ id: data._id }, 'secret', { expiresIn: 90000 }, (err, token) => {
                            res.header("jwt-auth", token).json({
                                sucess: true,
                                token: token
                            })
                        }))
                        .catch(err => res.status(404).send(err))
                })
        })
        .catch(err => res.send(err))
})




//LogIn route 
router.post('/login', (req, res) => {

    User.findOne({ Email: req.body.Email })
        .then(data => {
            if (data) {
                bcrypt.compare(req.body.Password, data.Password)
                    .then(data1 => {
                        if (data1) {
                            jwt.sign({ id: data._id }, 'secret', { expiresIn: 90000 }, (err, token) => {
                                if (err) return res.json({ message: "err creating the token" })
                                res.header("jwt-auth", token).json({
                                    sucess: true,
                                    token: token
                                })
                            })
                        } else {
                            throw Error("incorrect password")
                        }
                    })
            } else {
                throw Error("incorrect email")
            }
        })
        .catch(err => res.status(404).send(err))
})

router.get("/auth", auth, (req, res) => {
    console.log(req.user)
    if (req.user) {
        res.json({
            id: req.user._id,
            UserName: req.user.UserName,
            Password: req.user.Password,
            Email: req.user.Email
        })
    }
})

router.get("/logout", (req, res) => {
    res.header("jwt-auth", "", { maxAge: 1 }).json({
      token: ""
    })
  })
  


module.exports = router