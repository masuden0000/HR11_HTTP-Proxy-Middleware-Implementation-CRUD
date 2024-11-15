const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

async function hashPassword(password) {
  try {
    return bcrypt.hash(password, 10);
  } catch (err) {
    console.error("Error saat hashing password:", err);
    return null;
  }
}

async function comparePassword(password, hashPassword) {
  try {
    return bcrypt.compare(password, hashPassword);
  } catch (err) {
    console.error("Error saat membandingkan password:", err);
    return false;
  }
}

async function createId(role) {
  return role + uuidv4();
}

const allOperationsMethod = {
  hashPassword,
  comparePassword,
  createId,
};

module.exports = allOperationsMethod;
