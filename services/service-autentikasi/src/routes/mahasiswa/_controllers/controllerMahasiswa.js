const allReadFunctionsMahasiswa = require("../_models/readMahasiswa");
const allCreateFunctionsMahasiswa = require("../_models/CreateMahasiswa");
const allOperationsMethod = require("../../../../_services/id_HashPassword");
const authentication = require("../../../../_services/authentication");

async function register(req, res) {
  const { role, nim, nama, prodi, kelas, password } = req.body;
  const { checkMahasiswa } = allReadFunctionsMahasiswa;
  const { createMahasiswa } = allCreateFunctionsMahasiswa;
  const { hashPassword, createId } = allOperationsMethod;

  try {
    const existingMahasiswa = await checkMahasiswa(nim);

    if (existingMahasiswa) {
      return res.status(400).json({ message: "NIM sudah terdaftar" });
    }

    const idMahasiswa = await createId("mahasiswa_");
    const passwordMahasiswa = await hashPassword(password);
    const data = {
      id: idMahasiswa,
      role: role.toLowerCase(),
      nim,
      nama: nama.toLowerCase(),
      prodi: prodi.toLowerCase(),
      kelas: kelas.toLowerCase(),
      password: passwordMahasiswa,
    };
    const newMahasiswa = await createMahasiswa(data);

    if (!newMahasiswa) {
      return res.status(500).json({ message: "Invalid create user mahasiswa" });
    }

    return res.status(201).json({ message: "Success", data: newMahasiswa });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something is wrong:" });
    return;
  }
}

async function login(req, res) {
  const { nim, password } = req.body;
  const { checkMahasiswa, getPasswordMahasiswa } = allReadFunctionsMahasiswa;
  const { generateTokenJWT } = authentication;
  const { comparePassword } = allOperationsMethod;

  const passwordMahasiswa = await getPasswordMahasiswa(nim);
  const mahasiswa = await checkMahasiswa(nim);

  try {
    if (!mahasiswa) {
      return res.status(404).json({ message: "NIM tidak ditemukan" });
    }

    if (!passwordMahasiswa) {
      res.status(404).json({ message: "Error saat pengambilan password" });
    }

    const isPasswordValid = await comparePassword(password, passwordMahasiswa);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateTokenJWT(mahasiswa);
    return res.json({ message: "Login successful", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

const allControllersMahasiswa = {
  register,
  login,
};

module.exports = allControllersMahasiswa;
