// Only change code above this line
function myMutation(arr) {
	var myNewArr = [...arr];
	var firstArray = myNewArr[0].toLowerCase().split("");
	var secondArray = myNewArr[1].toLowerCase().split("");
	var isContained = false;
	for (var i = 0; i < secondArray.length; i++)
	{		
		for (var j = 0; j < firstArray.length; j++)
		{
			if (firstArray[j] == secondArray[i])
			{
				isContained = true;
				break;			
			}					
		}
		if (isContained == false)
		    break;
	}	
	return isContained;
}
// Only change code above this line

console.log(myMutation(["floor", "for"]));
module.exports = myMutation;