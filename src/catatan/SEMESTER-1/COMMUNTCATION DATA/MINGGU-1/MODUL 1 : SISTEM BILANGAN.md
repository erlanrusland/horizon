Rangkuman Modul #1: Sistem Bilangan

Mata Kuliah: Komunikasi Data

Topik: Konsep dan Konversi Sistem Bilangan
1. Definisi dan Jenis Sistem Bilangan

Sistem bilangan adalah kumpulan simbol khusus yang digunakan untuk mewakili data numerik. Dalam dunia komputer dan komunikasi data, terdapat empat sistem utama:
Sistem Bilangan	Basis (Radix)	Simbol/Digit
Desimal	10	0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Biner	2	0, 1
Oktal	8	0, 1, 2, 3, 4, 5, 6, 7
Heksadesimal	16	0-9 dan A, B, C, D, E, F (A=10 ... F=15)

    Catatan: Komputer menggunakan sistem Biner (logika on/off) untuk implementasi elektronik, sementara Heksadesimal sering digunakan dalam komunikasi data dan pengalamatan memori.

2. Aturan Konversi Bilangan
A. Ke Desimal (Basis n ke Basis 10)

Aturan: Kalikan setiap digit dengan BasisPosisi (posisi dimulai dari 0 dari kanan), lalu jumlahkan.

    Contoh Biner (1010): (1×23)+(0×22)+(1×21)+(0×20)=8+0+2+0=1010​.

B. Dari Desimal (Basis 10 ke Basis n)

Aturan: Bagilah bilangan desimal dengan basis tujuan secara berturut-turut, kemudian tuliskan sisa bagi dari yang terakhir ke yang pertama.
C. Antar Biner, Oktal, dan Heksadesimal

    Oktal ↔ Biner: Setiap 1 digit Oktal diwakili oleh 3 digit Biner.

    Heksadesimal ↔ Biner: Setiap 1 digit Heksadesimal diwakili oleh 4 digit Biner.

3. Satuan Data (Bit & Byte)

    Bit (Binary Digit): Satuan terkecil (0 atau 1).

    Byte: Kumpulan dari 8 bit.

    Kapasitas Penyimpanan:

        1 KB = 210 = 1.024 Byte.

        1 MB = 220 = 1.048.576 Byte.

        1 GB = 230 = 1.073.741.824 Byte.

4. Kode Bilangan (Karakter)

Untuk mengubah karakter (huruf/simbol) menjadi biner, digunakan standar pengkodean:

    ASCII: Standar 7-bit atau 8-bit (256 karakter).

    EBCDIC: Standar 8-bit yang sering digunakan pada komputer mainframe (IBM).

    UNICODE: Standar modern yang mencakup semua simbol bahasa di dunia (XML, Java, dll).

5. Jawaban Latihan (Check for Understanding)

Berikut adalah panduan penyelesaian soal pada modul:

    Kapasitas 4KB dalam Bit:
    4 KB=4×1.024 Byte=4.096 Byte.
    4.096 Byte×8 bit=32.768 bit.

    Konversi Biner ke Heksadesimal (Grup 4 bit):

        0100 1000 → 48

        0110 1010 1111 0010 → 6AF2

        1110 1000 0101 0101 0001 0111 → E85517

    Pola Bit dari Oktal (Grup 3 bit):

        23 (Oktal) → 2=010, 3=011 → 010011

        599 → Tidak valid, karena angka 9 tidak ada dalam sistem Oktal.











## [Referensi](https://drive.google.com/file/d/1PbwP_A2rJLqqJHLtLQLGp9LD90RwtFSc/view?usp=classroom_web&authuser=0)
