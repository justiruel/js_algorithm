let --> deklarasi variable, satu variable tidak dapat di deklarasi lebih dari sekali contoh :
```
let coba = 1;
let coba = 2;
...
kode diatas akan error :
Duplicate declaration "coba"
```

var --> sama dengan let, bedanya 1 variable dapat di deklarasi berulang-ulang contoh :
```
var coba = 1;
var coba = 2;
...
kode diatas tidak akan error
```

const --> sebuah konstanta yg nilai nya tidak dapat berubah, contoh :
```
const coba = 1;
coba= 2
...
kode diatas akan muncul error : 
"coba" is read-only
```

### kesimpulan
#### jika ingin agar data dari sebuah variable konsisten dan untuk menghindari kekeliruan deklarasi variable yg sama berkali-kali maka gunakan "let"
#### jika ingin memiliki data yg tidak dapat dirubah gunakan "const"

