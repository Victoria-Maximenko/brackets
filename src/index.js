module.exports = function check(str, bracketsConfig) {
  // your solution
  	var newArray = [];
	for(var i=0; i<bracketsConfig.length; i++){
		var full = bracketsConfig[i][0]+bracketsConfig[i][1];
		newArray.push(full);
	}
	
	function toSearch(){
		for(var k=0; k<newArray.length;){
			if(str.indexOf(newArray[k])===-1){
				k++;
			} else if(str.indexOf(newArray[k])!==-1){
				var itemNumber = str.indexOf(newArray[k]);
				str=str.slice(0, itemNumber) + str.slice(itemNumber+2);
				k=0;
			}
		}
	}
	toSearch();
	if(str.length>0){
		return false;
	}else{
		return true;
	}
}
