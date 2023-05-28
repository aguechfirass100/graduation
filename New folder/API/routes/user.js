const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")

const router = require("express").Router()
const userController = require("../controllers/userController")

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, userController.updateUser)

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser)

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, userController.getUser)

// GET ALL USER
router.get("/", verifyTokenAndAdmin, userController.getAllUsers)

// GET USER STATS
router.get("/stats", verifyTokenAndAdmin, userController.getUserStats)

module.exports = router