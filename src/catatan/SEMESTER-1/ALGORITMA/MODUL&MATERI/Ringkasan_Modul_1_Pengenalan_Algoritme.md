# Ringkasan Modul 1 -- Pengenalan Algoritme

**Mata Kuliah: Algoritme -- Semester 1**

------------------------------------------------------------------------

## 1. Tujuan Pembelajaran

Setelah mempelajari modul ini, mahasiswa mampu: 1. Memahami logika dan
penyelesaian masalah. 2. Menggunakan algoritma untuk menganalisis dan
memodelkan masalah tanpa bergantung pada bahasa pemrograman tertentu. 3.
Menuliskan algoritma dalam bentuk flowchart, pseudocode, dan kalimat
deskriptif.

------------------------------------------------------------------------

## 2. Pengertian Algoritma

Algoritma adalah sekumpulan langkah-langkah logis, sistematis, dan
terbatas untuk menyelesaikan suatu masalah.

Dalam ilmu komputer: Algoritma adalah deskripsi langkah-langkah
pemecahan masalah yang rinci dan jelas sehingga menghasilkan output yang
diharapkan dalam waktu terbatas.

Asal kata berasal dari nama ilmuwan Persia: Abu Ja'far Muhammad Musa
Al-Khwarizmi (780--850 M).

------------------------------------------------------------------------

## 3. Syarat Algoritma (Donald E. Knuth)

Sebuah algoritma harus memiliki:

1.  Finiteness → Harus berhenti (terminate).
2.  Definiteness → Tidak ambigu, setiap langkah jelas.
3.  Input → Memiliki data masukan.
4.  Output → Menghasilkan satu atau lebih keluaran.
5.  Effectiveness → Dapat dikerjakan dalam waktu wajar.

------------------------------------------------------------------------

## 4. Struktur Dasar Proses Algoritma

1.  Sequence (Urutan) Instruksi dijalankan dari awal sampai akhir secara
    berurutan.

2.  Selection (Percabangan) Instruksi dijalankan jika kondisi terpenuhi.
    Contoh: Jika nilai ≥ 60 maka Lulus.

3.  Iteration (Perulangan) Instruksi dijalankan berulang selama kondisi
    terpenuhi.

------------------------------------------------------------------------

## 5. Hubungan Algoritma dan Program

Langkah membuat program:

1.  Definisikan masalah.
2.  Rancang algoritma.
3.  Lakukan coding (pengkodean).
4.  Uji dan perbaiki program.

Algoritma yang ditulis dalam bahasa pemrograman disebut PROGRAM. Proses
mengubah algoritma menjadi program disebut CODING.

------------------------------------------------------------------------

## 6. Kesulitan Jika Tidak Membuat Algoritma

1.  Keterikatan aturan bahasa pemrograman.
2.  Keterbatasan kemampuan bahasa pemrograman.
3.  Beban logika dan detail teknis meningkat.

Cara mengatasinya: Gunakan representasi bebas seperti: - Bahasa alami
(natural language) - Pseudocode - Flowchart

------------------------------------------------------------------------

## 7. Cara Menuliskan Algoritma

### A. Kalimat Deskriptif

Menggunakan bahasa sehari-hari.

Struktur: - Head (Judul) - Deklarasi (Variabel) - Deskripsi
(Langkah-langkah)

Kelemahan: - Bisa ambigu - Kurang cocok untuk masalah kompleks

------------------------------------------------------------------------

### B. Flowchart

Representasi grafis algoritma menggunakan simbol.

Simbol utama: - Terminal (Mulai/Selesai) - Proses - Input/Output -
Decision (Keputusan) - Flow line (Garis alur)

Kelebihan: - Mudah dipahami secara visual

Kekurangan: - Membutuhkan ruang besar - Sulit untuk algoritma kompleks

------------------------------------------------------------------------

### C. Pseudocode

Notasi algoritma yang menyerupai bahasa pemrograman tetapi tidak terikat
bahasa tertentu.

Keunggulan: - Terstruktur - Tidak ambigu - Mudah diterjemahkan ke bahasa
pemrograman

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

------------------------------------------------------------------------

## 8. Contoh Algoritma Euclidean (FPB)

Digunakan untuk mencari Faktor Persekutuan Terbesar (FPB) dari dua
bilangan.

Langkah umum: 1. Bagi bilangan besar dengan bilangan kecil. 2. Jika sisa
= 0 → FPB ditemukan. 3. Jika tidak → ulangi dengan sisa sebagai pembagi
baru. 4. Proses berhenti saat sisa = 0.

------------------------------------------------------------------------

## 9. Ide Kunci

-   Algoritma adalah dasar utama dalam pemrograman.
-   Kesulitan pemrograman terletak pada perancangan algoritma, bukan
    bahasa pemrograman.
-   Algoritma dapat ditulis dalam:
    -   Bahasa alami
    -   Flowchart
    -   Pseudocode
-   Perancangan algoritma yang baik mempermudah proses coding dan
    debugging.

------------------------------------------------------------------------

## Kesimpulan

Algoritma adalah prosedur sistematis untuk menyelesaikan masalah secara
logis dan efisien. Pemahaman algoritma sangat penting sebelum
mempelajari bahasa pemrograman.
