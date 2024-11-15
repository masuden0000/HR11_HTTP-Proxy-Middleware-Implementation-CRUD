# HTTP Proxy Middleware Project

Proyek ini bertujuan untuk mengimplementasikan HTTP Proxy Middleware dengan kasus penggunaan autentikasi sederhana dan pengelolaan tugas. Proyek ini dibangun menggunakan Node.js, Express, dan Prisma sebagai ORM untuk berinteraksi dengan database.

## Fitur

- **Autentikasi Sederhana**: Membuat endpoint autentikasi untuk pengguna yang memungkinkan akses berdasarkan autentikasi.
- **Pengelolaan Tugas**: Menyediakan endpoint untuk membuat, membaca, memperbarui, dan menghapus tugas.

## Persyaratan

- **Node.js** v14 atau lebih baru
- **npm** atau **pnpm** sebagai package manager
- **Prisma** untuk manajemen database

## Instalasi

1. **Clone repository** ini.
2. Instal dependencies dengan perintah berikut:

    ```bash
    npm install
    ```

3. Buat database sesuai dengan skema yang ada di dalam file Prisma schema.

4. Terapkan skema ke database dengan perintah:

    ```bash
    npx prisma db push
    ```

5. Buat migrasi untuk skema database menggunakan perintah berikut:

    ```bash
    npx prisma migrate dev
    ```

## Menjalankan Aplikasi

Aplikasi ini terdiri dari tiga komponen utama yang dijalankan dengan perintah berbeda:

1. **Main Server**: Menjalankan server utama.
    
    ```bash
    npm run start
    ```

2. **Autentikasi**: Menjalankan service untuk autentikasi.

    ```bash
    npm run auth
    ```

3. **Pengelolaan Tugas**: Menjalankan service untuk pengelolaan tugas.

    ```bash
    npm run task
    ```

## Teknologi yang Digunakan

- **Node.js**: Runtime JavaScript untuk server-side.
- **Express.js**: Framework minimalis untuk membangun server HTTP.
- **Prisma**: ORM untuk manajemen database.

## Struktur Proyek

