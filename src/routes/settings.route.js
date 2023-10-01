const express = require("express");

const {
  getSettings,
  createSetting,
  updateSettings
} = require("../controllers/settings.controller");

const router = express.Router();

/* Creating the routes for the settings controller. */
router.get("/settings", getSettings);

router.post("/settings", createSetting);

router.patch("/settings/:id", updateSettings);

module.exports = router;