const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAcountStatusController,
} = require("../controllers/adminCtrl");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddlewares, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddlewares, getAllDoctorsController);

//POST ACOUNT STATUS
router.get(
  "/changeAcountStatus",
  authMiddlewares,
  changeAcountStatusController
);

module.exports = router;
