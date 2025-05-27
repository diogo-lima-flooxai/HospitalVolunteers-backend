const express = require("express");
const router = express.Router();
const VoluntarioController = require("../controllers/VoluntarioController");

router.post("/voluntarios", VoluntarioController.create);
router.get("/voluntarios", VoluntarioController.list);

module.exports = router;
