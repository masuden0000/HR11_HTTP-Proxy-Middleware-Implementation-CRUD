const express = require("express");
const authentication = require("../../../_services/authentication");
const allControllersMahasiswa = require("./_controllers/controllerMahasiswa");
const allReadFunctionsMahasiswa = require("./_models/readMahasiswa");

const router = express.Router();

const { register, login } = allControllersMahasiswa;
const { allMahasiswa } = allReadFunctionsMahasiswa;
const { authenticateJWT } = authentication;

router.get("/", authenticateJWT, async (req, res) => {
  const showAllMahasiswa = await allMahasiswa();
  res.status(201).json({ message: "Success", data: showAllMahasiswa });
});

router.post("/register", (req, res) => {
  register(req, res);
});

router.post("/login", (req, res) => {
  login(req, res);
});

module.exports = router;
