const express = require("express");
const {
  logincontroller,
  registercontroller,
  authController,
  applydoctorController,
} = require("../controllers/userCtrl");
const authMiddlewares = require("../middlewares/authMiddlewares");

//route object
const router = express.Router();

//routes
//Login || Post
router.post("/Login", logincontroller);

//Register || Post
router.post("/Register", registercontroller);

//Auth || Post
router.post("/getUserData", authMiddlewares, authController);

//Apply Doctor || Post
router.post("/apply-doctor", authMiddlewares, applydoctorController);

module.exports = router;
