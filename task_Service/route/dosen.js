const express = require("express");
const { v4: uuidv4 } = require("uuid");
const prisma = require("../../libs/prisma");
const functionController = require("../authentication/auth");
const router = express.Router();

const { authenticateJWT } = functionController;

router.post("/task", authenticateJWT, async (req, res) => {
  const dosenId = req.user.id;
  const { namaMatakuliah, deadline, kelas } = req.body;

  try {
    const task = await prisma.tugas.create({
      data: {
        id: uuidv4(),
        dosenId,
        namaMatakuliah,
        deadline,
        kelas,
      },
    });

    res.status(201).json({ message: "Task created", task });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to create task", error: err.message });
  }
});

module.exports = router;
