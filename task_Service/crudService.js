const express = require("express");
const dosen = require("./route/dosen");
const app = express();
const PORT = 3200;

app.use(express.json());

app.use("/dosen", dosen);

app.listen(PORT, () => {
  console.log(`Task service is running on port ${PORT}`);
});
