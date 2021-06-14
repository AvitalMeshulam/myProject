const router=require("express").Router()
const user=require("../controller/user")

router.post("/register",user.register)
router.post("/getAllUsers",user.getAllUsers)


module.exports=router