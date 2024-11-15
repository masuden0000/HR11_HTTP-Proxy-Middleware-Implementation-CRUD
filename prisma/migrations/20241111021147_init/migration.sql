/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Mahasiswa` (
    `id` VARCHAR(191) NOT NULL,
    `role` VARCHAR(10) NOT NULL,
    `nim` VARCHAR(11) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `prodi` VARCHAR(100) NOT NULL,
    `kelas` VARCHAR(2) NOT NULL,
    `password` VARCHAR(18) NOT NULL,

    UNIQUE INDEX `Mahasiswa_nim_key`(`nim`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
