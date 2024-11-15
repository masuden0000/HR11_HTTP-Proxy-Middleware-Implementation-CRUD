const express = require("express");
const dosenRoute = require("./dosen/index");
const authenticationJWT = require("../../_services/Authentication");
const app = express();
const PORT = 3200;

app.use(express.json());

app.use("/dosen", authenticationJWT, dosenRoute);

app.listen(PORT, () => {
  console.log(`Task service is running on port ${PORT}`);
});
