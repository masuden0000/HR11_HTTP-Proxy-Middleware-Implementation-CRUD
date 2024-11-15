const prisma = require("../../libs/prisma");

async function checkDosenbyId(id) {
  return (existingDosen = await prisma.dosen.findUnique({
    where: { id },
  }));
}

const functionModels = {
  checkDosenbyId,
};

module.exports = functionModels;
