const prisma = require("../../../../_libs/prisma");

async function createDosen(dataUser) {
  return (newDosen = await prisma.dosen.create({
    data: {
      id: dataUser.id,
      role: dataUser.role,
      nrp: dataUser.nrp,
      nama: dataUser.nama,
      prodi: dataUser.prodi,
      password: dataUser.password,
    },
  }));
}

const allCreateFunctionsDosen = {
  createDosen,
};
module.exports = allCreateFunctionsDosen;
