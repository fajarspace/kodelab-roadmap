---
sidebar_position: 2
---


## Printing pada console

```shell
#include <iostream>
using namespace std;

int main(){ 
    cout << "Hello world " << endl;
    return 0;
}
```

`#incluce <iostream>` Library deklarasi I/O pada C++

`using namespace std;` Library yang ada pada iostream, menampilkan output pada C++

`int main()` Sebuah function, titik awal di mana seluruh program C++ akan mulai dieksekusi

`cout << "Hello world " << endl;` cout (coutput) dan endl (endline)

`return 0;` Menandakan fungsi main() berakhir

## Deklarasi & Cin
```shell
#include <iostream>
using namespace std;

int main(){
    int a; 
    a = 10;
    cout << a << endl;

    int b;
    cout << "masukkan nilai" << endl;
    cin >> b; 
    cout << "nilai B adalah :";
    cout << b << endl;
}
```
deklarasi variabel

`int a;` mendeklarasikan variabel

`a = 10;` masukan value

Cin / Cinput

`int b;` mendeklarasikan variabel

`cin >> b;` menginput nilai manual

`cout << b << endl;` cetak b

## Variabel, Tipe Data, dan Konstanta

### Variabel
Wadah yang menyimpan sebuah nilai, Contoh deklarasi sebuah variabel:

```shell
string nama;
int a, b, c;
 ```
 atau langsung disertai dengan nilainya:
 ```shell
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
```shell
const float PHI = 3.14;
```
Menggunakan #define
```shell
 #define PHI 3.14
```
Contoh program
```shell
#include <iostream>
using namespace std;
int main() {
  const int a = 1;
  cout << "a = " << a;
  return 0;
}
```

