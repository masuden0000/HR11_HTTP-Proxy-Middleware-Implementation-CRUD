const prisma = require("../../../../_libs/prisma");

async function allDosen() {
  return prisma.dosen.findMany();
}

async function checkDosen(nrp) {
  return (existingDosen = await prisma.dosen.findUnique({
    where: { nrp },
  }));
}
async function checkDosenbyId(id) {
  return (existingDosen = await prisma.dosen.findUnique({
    where: { id },
  }));
}

async function getPasswordDosen(nrp) {
  const user = await prisma.dosen.findUnique({
    where: { nrp },
    select: {
      password: true,
    },
  });
  return user ? user.password : null;
}

const allReadFunctionsDosen = {
  allDosen,
  checkDosen,
  checkDosenbyId,
  getPasswordDosen,
};

module.exports = allReadFunctionsDosen;
