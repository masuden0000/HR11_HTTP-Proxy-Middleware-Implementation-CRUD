const prisma = require("../../../../_libs/Prisma");

async function checkDosenbyId(id) {
  return (existingDosen = await prisma.dosen.findUnique({
    where: { id },
  }));
}

module.exports = checkDosenbyId;
