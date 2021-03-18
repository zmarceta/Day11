// Only change code above this line
function splitArraysInGroups(arr,n) {
	var newArr = [...arr];
	var result = new Array();
	var maxCount = Math.min(newArr.length,n*n);
	for	(var i = 0; i < maxCount; i += n)
	{
		result.push(newArr.slice(i,i+n));
	}
	return result;
}
// Only change code above this line

console.log(splitArraysInGroups(["a","b","c","d"],2));
console.log(splitArraysInGroups([0,1,2,3,4,5,6],3));
console.log(splitArraysInGroups([0,1,2,3,4,5],2));
console.log(splitArraysInGroups([0,1,2,3,4,5,6,7,8],2));
console.log(splitArraysInGroups([0,1,2,3,4,5,6,7,8],3));
module.exports = splitArraysInGroups;