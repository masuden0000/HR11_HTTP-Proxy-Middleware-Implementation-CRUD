const prisma = require("../../../../_libs/prisma");

async function createMahasiswa(dataUser) {
  return (newMahasiswa = await prisma.mahasiswa.create({
    data: {
      id: dataUser.id,
      role: dataUser.role,
      nim: dataUser.nim,
      nama: dataUser.nama,
      prodi: dataUser.prodi,
      kelas: dataUser.kelas,
      password: dataUser.password,
    },
  }));
}

const allCreateFunctionsMahasiswa = {
  createMahasiswa,
};
module.exports = allCreateFunctionsMahasiswa;
