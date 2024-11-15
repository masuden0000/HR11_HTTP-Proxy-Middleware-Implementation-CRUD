const allReadFunctionDosen = require("../_models/readDosen");
const allCreateFunctionsDosen = require("../_models/createDosen");
const allOperationsMethod = require("../../../../_services/id_HashPassword");
const authentication = require("../../../../_services/authentication");

async function register(req, res) {
  const { role, nrp, nama, prodi, password } = req.body;
  const { checkDosen } = allReadFunctionDosen;
  const { createDosen } = allCreateFunctionsDosen;
  const { hashPassword, createId } = allOperationsMethod;

  try {
    const existingDosen = await checkDosen(nrp);

    if (existingDosen) {
      return res.status(400).json({ message: "NIM sudah terdaftar" });
    }

    const idDosen = await createId("dosen_");
    const passwordDosen = await hashPassword(password);
    const data = {
      id: idDosen,
      role: role.toLowerCase(),
      nrp,
      nama: nama.toLowerCase(),
      prodi: prodi.toLowerCase(),
      password: passwordDosen,
    };
    const newDosen = await createDosen(data);

    if (!newDosen) {
      return res.status(500).json({ message: "Invalid create user dosen" });
    }

    return res.status(201).json({ message: "Success", data: newDosen });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something is wrong:" });
    return;
  }
}

async function login(req, res) {
  const { nrp, password } = req.body;
  const { checkDosen, getPasswordDosen } = allReadFunctionDosen;
  const { generateTokenJWT } = authentication;
  const { comparePassword } = allOperationsMethod;
  
  try {
    const dosen = await checkDosen(nrp);
    if (!dosen) {
      return res.status(404).json({ message: "NRP tidak ditemukan" });
    }
    
    const passwordDosen = await getPasswordDosen(nrp);
    if (!passwordDosen) {
      res.status(404).json({ message: "Error saat pengambilan password" });
    }

    const isPasswordValid = await comparePassword(password, passwordDosen);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateTokenJWT(dosen);
    return res.json({ message: "Login successful", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

const allControllersDosen = {
  register,
  login,
};

module.exports = allControllersDosen;
