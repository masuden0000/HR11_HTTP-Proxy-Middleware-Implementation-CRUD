const express = require("express");
const app = express();
const port = 3200;
app.get("/api/resource", (req, res) => {
  res.json({ message: "Response from Service 2" });
});

app.post("/pembayaran", (req, res) => {
    res.json({ message: "Pembayaran berhasil" });
});

app.listen(port, () => {
  console.log(`Service 2 is running on port ${port}`);
});
