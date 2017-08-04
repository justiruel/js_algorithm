var values = {
    "data": [{
                "id": "2756",
                "invno": "INV91001707000044",
                "invfile": "INV91001707000044.pdf",
                "invtitle": "Discount Lah",
                "amount": "1200.00",
                "totalAmount": "1177.44",
                "discount": "22.56",
                "paid": 0,
                "outstanding": "1177.44",
                "status": 0,
                "va": "",
                "paydate": "2017-07-20 23:59:08",
                "methode": "Bank wire",
                "cleardate": "2017-07-19",
                "stdname": "LI HAOCHEN ",
                "nric": "T1091692A",
                "userid": "260720",
                "stdclass": "1A"
            }, {
                "id": "2755",
                "invno": "INV91001707000043",
                "invfile": "INV91001707000043.pdf",
                "invtitle": "Again Discount",
                "amount": "900.00",
                "totalAmount": "883.08",
                "discount": "16.92",
                "paid": 0,
                "outstanding": "883.08",
                "status": 0,
                "va": "",
                "paydate": "2017-07-20 23:59:07",
                "methode": "Bank wire",
                "cleardate": "2017-07-19",
                "stdname": "LI HAOCHEN ",
                "nric": "T1091692A",
                "userid": "260720",
                "stdclass": "1A"
            }
            ]
            }
            
       
var array_new = [];            
array_new.push(values.data[0]);
for (x=1;x<values.data.length;x++){
	var bool = true;
	array_new.forEach(function(item,index){
  	if(values.data[x].stdclass == item.stdclass)	{
 	 		bool = false;
      //array_new.push(values.data[x]);
 		}
    if (bool){
    	array_new.push(values.data[x]);
    }
  });	
}

console.log(array_new);
