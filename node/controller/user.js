const jwt = require("jsonwebtoken")
const User = require("../models/user")
const register = async (req, res) => {
    try {
        const newUser = await new User(req.body)
        newUser.save()
        const token = await jwt.sign({ name: req.body.name, password: req.body.password }, process.env.SECRET)
        res.status(200).json({ user: newUser, token: token })
    }
    catch {
        err => {
            res.status(400).json({ err: err })
        }
    }
}
const getAllUsers = async (req, res) => {
    try {
        const newUser = await User.find()
        res.status(200).json({ allUser: newUser })
    }
    catch {
        err => {
            res.status(400).json({ err: err })
        }
    }
}



module.exports = { register, getAllUsers }
