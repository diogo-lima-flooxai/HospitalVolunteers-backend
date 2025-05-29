const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes")
const authRoutes = require("./authRoutes")

router.use('/', authRoutes);
router.use('/', userRoutes);

module.exports = router;