const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../_utils/EnvConfig");
const checkDosenbyId = require("../src/routes/dosen/_models/ReadDosen");

async function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    if (decoded.role != "dosen") {
      return res.status(403).json({ message: "Invalid role" });
    }
    req.user = await checkDosenbyId(decoded.id);
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = authenticateJWT;
