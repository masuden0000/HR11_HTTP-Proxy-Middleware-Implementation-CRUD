/*
  Warnings:

  - Added the required column `dosenId` to the `Tugas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tugas` ADD COLUMN `dosenId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Tugas` ADD CONSTRAINT `Tugas_dosenId_fkey` FOREIGN KEY (`dosenId`) REFERENCES `Dosen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
