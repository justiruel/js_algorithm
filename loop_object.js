```
var myObj = {
	nama:"irul",
  alamat:"singosari",
  umur:26
};

Object.keys(myObj).forEach(function(item,index){
	console.log(item+"-"+index);
  //nama-0
  //alamat-1
  //umur-2
});

console.log(myObj[Object.keys(myObj)[0]]);
//irul

console.log(myObj[Object.keys(myObj)[1]]);
//singosari
```
