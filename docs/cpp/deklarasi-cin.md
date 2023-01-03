---
sidebar_position: 4
title: Deklarasi & Cin
---

```cpp
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