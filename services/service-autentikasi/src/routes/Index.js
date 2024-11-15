const express = require("express");
const mahasiswaRoute = require("./mahasiswa/index");
const dosenRoute = require("./dosen/index");
const app = express();
const PORT = 3199;

app.use(express.json());

app.use("/mahasiswa", mahasiswaRoute);
app.use("/dosen", dosenRoute);

app.listen(PORT, () => {
  console.log(`Authentication service is running on port ${PORT}`);
});
