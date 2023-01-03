---
sidebar_position: 5
title: Variabel, tipe data & konstanta
---

### Variabel
Wadah yang menyimpan sebuah nilai, Contoh deklarasi sebuah variabel:

```cpp
string nama;
int a, b, c;
 ```
 atau langsung disertai dengan nilainya:
 ```cpp
 int jumlah;
 jumlah = 10;
 ```

### Tipe Data
terdapat 2 kelompok tipe data dalam bahasa C++, yakni tipe data sederhana (Primitive data types), dan tipe data kompleks (Non-primitive data types).

Primitive data type, terdiri dari tipe data berikut:
- Integer: Tipe data untuk angka bulat seperti 5, 7, atau 48.
- Float/Double: Tipe data untuk angka pecahan seperti 3.14, 5.55, atau 0.00024.
- Boolean: Tipe data yang berisi nilai true atau false.
- Char: Tipe data untuk 1 karakter, seperti ‘a’, ‘Z’ atau ‘%’.
- Void: Tipe data khusus yang menyatakan tidak ada data.

Non-primitive data type, di antaranya:
- String: Tipe data untuk kumpulan karakter, seperti “Andi”, “Duniailkom”, atau “Belajar C++”.
- Array: Tipe data untuk kumpulan tipe data lain yang sejenis.
- Structure (struct): Tipe data yang terdiri dari kumpulan tipe data dasar. Tipe data tersebut bisa lebih dari 1 jenis.
- Enum: Tipe data bentukan yang dibuat sendiri oleh kita (programmer).
- Pointer: Tipe data untuk mengakses alamat memory secara langsung.

### Konstanta
Wadah yang dapat menyimpan nilai tetap selama eksekusi program

Menggunakan keyword const
```cpp
const float PHI = 3.14;
```
Menggunakan #define
```cpp
 #define PHI 3.14
```
Contoh program
```cpp
#include <iostream>
using namespace std;
int main() {
  const int a = 1;
  cout << "a = " << a;
  return 0;
}
```