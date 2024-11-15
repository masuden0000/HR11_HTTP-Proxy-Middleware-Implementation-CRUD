const express = require("express");
const createId = require("../dosen/_services/createIdTask");
const createTask = require("./_models/CreateTask");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Path dilindungi" });
});

router.post("/task", async (req, res) => {
  try {
    const dosenId = req.user.id;
    const { namaMatakuliah, deadline, kelas } = req.body;
    const idTask = await createId();

    const data = {
      dosenId,
      namaMatakuliah,
      deadline,
      kelas,
      idTask,
    };

    const task = await createTask(data);
    console.log(task);

    res.status(201).json({ message: "Success", task });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Gagal membuat tugas" });
  }
});

module.exports = router;
