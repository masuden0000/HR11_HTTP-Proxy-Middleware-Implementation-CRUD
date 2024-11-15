const express = require("express");
const authentication = require("../../../_services/authentication");
const allControllersDosen = require("./_controllers/controllerDosen");
const allReadFunctionsDosen = require("./_models/readDosen");

const router = express.Router();

const { register, login } = allControllersDosen;
const { allDosen } = allReadFunctionsDosen;
const { authenticateJWT } = authentication;

router.get("/", authenticateJWT, async (req, res) => {
  const showAllDosen = await allDosen();
  res.status(201).json({ message: "Success", data: showAllDosen });
});

router.post("/register", (req, res) => {
  register(req, res);
});

router.post("/login", (req, res) => {
  login(req, res);
});

module.exports = router;
