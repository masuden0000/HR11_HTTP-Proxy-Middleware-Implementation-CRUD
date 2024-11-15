/*
  Warnings:

  - You are about to alter the column `prodi` on the `mahasiswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `mahasiswa` MODIFY `prodi` VARCHAR(50) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Dosen` (
    `id` VARCHAR(191) NOT NULL,
    `role` VARCHAR(10) NOT NULL,
    `nrp` VARCHAR(19) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `prodi` VARCHAR(50) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Dosen_nrp_key`(`nrp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
