const data = {
	param1:10,
  param2:20,
  code(){
  	return this.param1 + this.param2;
  }
}

console.log(data.code());
