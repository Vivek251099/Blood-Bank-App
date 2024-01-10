const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonarListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router objecta
const router = express.Router();
//Routes

//GET || Donar List
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarListController
);
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

// delete Donar
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);
//EXPORT
module.exports = router;
