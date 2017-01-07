(function(){
	
if(typeof String.prototype.repeatt !== "function"){


String.prototype.repeatt=function(count){

if(count < 0){
	throw new RangeError("Invalid count value");
}

var output="";

for(var i=0; i<count; i++){
output += this.toString()+"  ";

}
return output;
}};

})();