const prisma = require("../../../../_libs/prisma");

async function allMahasiswa() {
  return prisma.mahasiswa.findMany();
}

async function checkMahasiswa(nim) {
  return (existingMahasiswa = await prisma.mahasiswa.findUnique({
    where: { nim },
  }));
}

async function checkMahasiswabyId(id) {
  return (existingMahasiswa = await prisma.mahasiswa.findUnique({
    where: { id },
  }));
}

async function getPasswordMahasiswa(nim) {
  try {
    const user = await prisma.mahasiswa.findUnique({
      where: { nim },
      select: {
        password: true,
      },
    });
    return user ? user.password : null;
  } catch (err) {
    console.error("Error saat pengambilan password:", err);
    return null;
  }
}

const allReadFunctionsMahasiswa = {
  allMahasiswa,
  checkMahasiswa,
  checkMahasiswabyId,
  getPasswordMahasiswa,
};

module.exports = allReadFunctionsMahasiswa;
