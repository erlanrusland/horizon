# Ringkasan Modul 1 -- Pendahuluan Algoritma

**Mata Kuliah: Algoritme -- Semester 1**

------------------------------------------------------------------------

## 1. Pengertian Algoritma

Algoritma adalah langkah-langkah logis dan sistematis untuk
menyelesaikan suatu masalah dalam waktu terbatas dan menghasilkan output
yang diharapkan.

Asal kata berasal dari nama ilmuwan Persia: Abu Ja'far Muhammad Musa
Al-Khwarizmi (780--850 M).

Dalam ilmu komputer: Algoritma adalah dasar dalam perancangan program
sebelum dilakukan proses coding.

------------------------------------------------------------------------

## 2. Syarat Algoritma (Menurut Donald E. Knuth)

1.  Finiteness → Harus berhenti (terminate).
2.  Definiteness → Langkah jelas dan tidak ambigu.
3.  Input → Memiliki data masukan.
4.  Output → Menghasilkan keluaran.
5.  Effectiveness → Dapat dikerjakan dalam waktu wajar.

------------------------------------------------------------------------

## 3. Struktur Dasar Proses Algoritma

1.  Sequence (Urutan) Instruksi dijalankan berurutan.

2.  Selection (Percabangan) Instruksi dijalankan berdasarkan kondisi.
    Contoh: Jika nilai ≥ 60 → Lulus.

3.  Iteration (Perulangan) Instruksi dijalankan berulang selama kondisi
    terpenuhi.

------------------------------------------------------------------------

## 4. Hubungan Algoritma dan Program

Langkah membuat program:

1.  Definisikan masalah.
2.  Rancang algoritma.
3.  Lakukan coding (pengkodean).
4.  Uji dan perbaiki program.

Algoritma + Bahasa Pemrograman = Program

------------------------------------------------------------------------

## 5. Kesulitan Jika Tidak Membuat Algoritma

1.  Keterikatan aturan bahasa pemrograman.
2.  Keterbatasan kemampuan bahasa pemrograman.
3.  Beban logika dan detail teknis meningkat.

Cara mengatasinya: Gunakan representasi bebas seperti: - Bahasa alami -
Pseudocode - Flowchart

------------------------------------------------------------------------

## 6. Cara Menuliskan Algoritma

### A. Kalimat Deskriptif

Menggunakan bahasa sehari-hari. Mudah dibuat tetapi bisa ambigu.

Struktur: - Head (Judul) - Deklarasi - Deskripsi

------------------------------------------------------------------------

### B. Flowchart

Representasi visual algoritma menggunakan simbol.

Simbol penting: - Terminal (Mulai/Selesai) - Proses - Input/Output -
Decision (Keputusan) - Flow line (Garis alur)

Kelebihan: Mudah dipahami secara visual. Kekurangan: Membutuhkan ruang
besar dan sulit untuk algoritma kompleks.

------------------------------------------------------------------------

### C. Pseudocode

Notasi algoritma menyerupai bahasa pemrograman tetapi tidak terikat
bahasa tertentu.

Contoh:

    Algoritma Lulus
    Deklarasi:
      nilai : integer

    Deskripsi:
      read(nilai)
      if nilai >= 60 then
         print("Lulus")
      else
         print("Tidak Lulus")
      endif

Keunggulan: - Terstruktur - Tidak ambigu - Mudah diterjemahkan ke bahasa
pemrograman

------------------------------------------------------------------------

## 7. Contoh Algoritma Euclidean (FPB)

Digunakan untuk mencari Faktor Persekutuan Terbesar (FPB).

Langkah umum: 1. Jika sisa pembagian = 0 → FPB ditemukan. 2. Jika tidak
→ ulangi pembagian dengan sisa sebagai pembagi baru. 3. Proses berhenti
saat sisa = 0.

------------------------------------------------------------------------

## 8. Ide Kunci

-   Algoritma adalah dasar utama dalam pemrograman.
-   Kesulitan pemrograman terletak pada perancangan algoritma, bukan
    bahasa pemrograman.
-   Algoritma dapat ditulis dalam:
    -   Bahasa alami
    -   Flowchart
    -   Pseudocode
-   Perancangan algoritma yang baik mempermudah coding dan debugging.

------------------------------------------------------------------------

## Kesimpulan

Algoritma adalah prosedur sistematis untuk menyelesaikan masalah secara
logis dan efisien. Pemahaman algoritma sangat penting sebelum
mempelajari bahasa pemrograman.
