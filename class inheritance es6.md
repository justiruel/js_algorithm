```
class Vehicle {
 
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
 
  getName () {
    return this.name;
  }
 
  getType () {
    return this.type;
  }
 
}
class Car extends Vehicle {
 
  constructor (name) {
    super(name, 'car');
  }
 
  getName () {
    return 'It is a car: ' + super.getName();
  }
 
}
let car = new Car('Tesla');
console.log(car.getName()); // It is a car: Tesla
console.log(car.getType()); // car
```

pada line 21 ada 'super()', super itu merupakan method yang me-refer ke constructor class parent (Vehicle), jadi kalau ingin mengisi value dari constructor Vehicle dari class Car gunakan perintah super(); <br/>
ingat! class child akan mewarisi semua yg ada di class parent termasuk property dan method<br/>
untuk menlankan method class parent dari dalam class child --> super.getType()
### Jika ingin melihat bentuknya di es5 seperti apa coba convert di babel :  https://babeljs.io/repl/
