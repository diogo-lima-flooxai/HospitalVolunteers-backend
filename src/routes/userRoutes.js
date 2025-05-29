const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController")

router.post("/register", UserController.register);
router.get('/users', UserController.getAll);

module.exports = router;
