const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsContoller,
} = require("../controllers/analyticsContoller");

const router = express.Router();

//Get blood records
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsContoller);

module.exports = router;
