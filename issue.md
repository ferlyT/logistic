# Project Setup: Logistic Backend API

## Deskripsi Tugas
Lakukan setup awal untuk project backend API "Logistic". Project ini harus ditempatkan di dalam folder `backend` yang baru. Anda diminta untuk menginisialisasi project dan mengkonfigurasi teknologi dasarnya sesuai dengan instruksi di bawah.

## Tech Stack Utama
- **Runtime**: Bun
- **Web Framework**: Elysia JS
- **ORM**: Drizzle ORM
- **Database**: MySQL

## Instruksi Implementasi (High-Level)

1. **Pembuatan & Inisialisasi Project**
   - Buat folder bernama `backend` di dalam direktori project ini.
   - Pindah ke dalam direktori `backend` dan lakukan inisialisasi project Bun kosong (`bun init` atau setara).

2. **Instalasi Dependencies**
   - Install core framework: Elysia JS.
   - Install database tools: Drizzle ORM, Drizzle Kit (untuk manajemen migrasi), dan driver MySQL yang kompatibel (misalnya `mysql2`).

3. **Konfigurasi Database & ORM**
   - Konfigurasikan koneksi Drizzle ke database MySQL menggunakan URL koneksi dari file `.env`.
   - Setup konfigurasi Drizzle Kit (`drizzle.config.ts`).
   - Buat satu contoh schema tabel sederhana (misal: tabel `users` atau `items`) sebagai *proof of concept* bahwa ORM berfungsi.

4. **Setup Server Elysia**
   - Buat entry point aplikasi (misal `src/index.ts`).
   - Inisialisasi server Elysia dan jalankan.
   - Buat beberapa endpoint dasar:
     - `GET /` -> Health check / memastikan server berjalan.
     - Endpoint sederhana untuk mengetes koneksi ke database menggunakan Drizzle.

5. **Konfigurasi Script**
   - Tambahkan script yang diperlukan di `package.json` untuk menjalankan server di mode development (misalnya `bun run --watch src/index.ts`) dan script untuk menjalankan migrasi Drizzle.

## Catatan untuk Agent (Gemini Flash)
- Kerjakan instruksi di atas secara sistematis. Pastikan semua command dieksekusi di dalam folder `backend`.
- Jangan terlalu fokus pada detail implementasi bisnis logik yang rumit saat ini, fokus pada **setup fundamental** yang berjalan sempurna.
- Gunakan praktik kode yang rapi dan terstruktur untuk mempermudah pengembangan ke depannya.
