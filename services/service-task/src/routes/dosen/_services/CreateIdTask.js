const { v4: uuidv4 } = require("uuid");

async function createId() {
  return "tugas_" + uuidv4();
}

module.exports = createId;