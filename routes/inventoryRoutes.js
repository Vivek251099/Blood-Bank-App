const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalsController,
  getOrganizationController,
  getInventoryHospitalController,
  getOrgnaizationForHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
//Add inventory || POST

router.post("/create-inventory", authMiddleware, createInventoryController);

//Get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);

//Get recent blood records
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//Get hospital blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//Get donar records
router.get("/get-donars", authMiddleware, getDonarsController);

//Get Hospital records
router.get("/get-hospitals", authMiddleware, getHospitalsController);
//get organization records
router.get("/get-organization", authMiddleware, getOrganizationController);

//organization associated with hospital
router.get(
  "/get-organization-for-hospital",
  authMiddleware,
  getOrgnaizationForHospitalController
);

module.exports = router;
