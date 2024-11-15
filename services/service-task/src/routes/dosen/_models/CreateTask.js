const prisma = require("../../../../_libs/Prisma");

async function createTask(dataTask) {
  return (task = await prisma.tugas.create({
    data: {
      id: dataTask.idTask,
      dosenId: dataTask.dosenId,
      namaMatakuliah: dataTask.namaMatakuliah,
      deadline: dataTask.deadline,
      kelas: dataTask.kelas,
    },
  }));
}

module.exports = createTask;
