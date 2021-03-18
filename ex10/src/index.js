// Only change code above this line
function mySplice(arr1,arr2,n) {
	var myNewArr1 = [...arr1];
	var myNewArr2 = [...arr2];
	for (var i = 0; i < myNewArr1.length; i++)
	{
		myNewArr2.splice(n+i,0,myNewArr1[myNewArr1.length - 1 - i]);
	}
	return myNewArr2;
}
// Only change code above this line

console.log(mySplice([1,2,3],[4,5],1));
console.log(mySplice([1,2,3],[4,5],2));
console.log(mySplice(["b","c"],["a","d"],1));
console.log(mySplice(["dell","phillips"],["samsung","aox","sony"],2));
module.exports = mySplice;