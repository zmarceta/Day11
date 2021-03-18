// Only change code above this line
function myBouncer(arr) {
	var myNewArr = [...arr];
	var finalArr = new Array();
	for (var i = 0; i < myNewArr.length; i++)
	{		
		if (myNewArr[i])
			finalArr.push(myNewArr[i]);		
	}
	return finalArr;
}
// Only change code above this line

console.log(myBouncer([9,"re","",0,false,5]));
module.exports = myBouncer;