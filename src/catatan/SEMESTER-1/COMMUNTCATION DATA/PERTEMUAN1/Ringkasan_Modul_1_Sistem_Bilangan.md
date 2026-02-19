# Modul 1 -- Sistem Bilangan

**Mata Kuliah: Data Communication**

## Tujuan Pembelajaran

1.  Memahami konsep sistem bilangan.\
2.  Memahami sistem bilangan Desimal, Biner, Oktal, dan Hexadesimal.\
3.  Melakukan konversi antar sistem bilangan.

------------------------------------------------------------------------

# 1. Konsep Dasar Sistem Bilangan

Sistem bilangan adalah kumpulan simbol yang digunakan untuk
merepresentasikan angka.

Digunakan dalam komputer: - Desimal (Basis 10) - Biner (Basis 2) - Oktal
(Basis 8) - Hexadesimal (Basis 16)

Dalam komunikasi data → Biner dan Hexadesimal.

------------------------------------------------------------------------

# 2. Jenis Sistem Bilangan

## A. Desimal (Basis 10)

Simbol: 0--9\
Contoh: 5185.68₁₀ = (5×10³) + (1×10²) + (8×10¹) + (5×10⁰) + (6×10⁻¹) +
(8×10⁻²)

## B. Biner (Basis 2)

Simbol: 0 dan 1\
Contoh: 1010₂ = (1×2³) + (0×2²) + (1×2¹) + (0×2⁰) = 10₁₀

## C. Oktal (Basis 8)

Simbol: 0--7\
Contoh: 56₈ = (5×8¹) + (6×8⁰) = 46₁₀

## D. Hexadesimal (Basis 16)

Simbol: 0--9 dan A--F\
A=10, B=11, C=12, D=13, E=14, F=15\
Contoh: 1A₁₆ = (1×16¹) + (10×16⁰) = 26₁₀

------------------------------------------------------------------------

# 3. Konversi Sistem Bilangan

## I. Basis 2, 8, 16 → Basis 10

Kalikan setiap digit dengan basis\^pangkat lalu jumlahkan.

Contoh: 11011₂ = 27₁₀\
1501₈ = 833₁₀\
A1F₁₆ = 2591₁₀

## II. Basis 10 → Basis 2, 8, 16

Bagi dengan basis tujuan, sisa dibaca dari bawah ke atas.

Contoh: 179₁₀ = 10110011₂\
179₁₀ = 163₈\
179₁₀ = B3₁₆

## III. Oktal/Hexa → Biner

-   Oktal → tiap digit jadi 3 bit\
-   Hexa → tiap digit jadi 4 bit

## IV. Biner → Oktal/Hexa

-   Ke Oktal → kelompok 3 bit\
-   Ke Hexa → kelompok 4 bit

------------------------------------------------------------------------

# 4. Bit dan Byte

## Bit

Binary Digit (0 atau 1)\
n bit → 2ⁿ kemungkinan kombinasi

## Byte

1 byte = 8 bit

Satuan kapasitas: - 1 KB = 2¹⁰ = 1.024 byte\
- 1 MB = 2²⁰ = 1.048.576 byte\
- 1 GB = 2³⁰ = 1.073.741.824 byte

------------------------------------------------------------------------

# 5. Kode Karakter

## ASCII

7 bit = 128 karakter\
8 bit = 256 karakter

## EBCDIC

Digunakan pada mainframe, 8 bit

## UNICODE

Standar internasional untuk semua simbol bahasa modern

------------------------------------------------------------------------

# Kesimpulan

-   Komputer menggunakan sistem bilangan biner.\
-   Sistem penting: Desimal, Biner, Oktal, Hexadesimal.\
-   Konversi antar sistem sangat penting dalam pemrograman dan
    jaringan.\
-   Data direpresentasikan dalam bit dan byte.
