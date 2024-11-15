const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiresIn } = require("../_utils/envConfig");
const allReadFunctionsMahasiswa = require("../src/routes/mahasiswa/_models/readMahasiswa");
const allReadFunctionsDosen = require("../src/routes/dosen/_models/readDosen");

const { checkDosenbyId } = allReadFunctionsDosen;
const { checkMahasiswabyId } = allReadFunctionsMahasiswa;

function generateTokenJWT(user) {
  return jwt.sign({ id: user.id, role: user.role }, jwtSecret, {
    expiresIn: jwtExpiresIn,
  });
}

async function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    try {
      if (decoded.role == "dosen") {
        req.user = await checkDosenbyId(decoded.id);
      } else if (decoded.role == "mahasiswa") {
        req.user = await checkMahasiswabyId(decoded.id);
      } else {
        return res.status(403).json({ message: "Invalid role" });
      }
    } catch (err) {
      console.error("Something is wrong:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(403).json({ message: "Invalid token" });
  }
}

const authentication = {
  generateTokenJWT,
  authenticateJWT,
};

module.exports = authentication;
