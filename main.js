var array=[1,2,3,4,2,"a",48,"a","a",4,4,4];
var newArray=[]; var count=0;
function dublicateNum(array)
	{
	for(i=0; i<array.length; i++)
		{
		for(j=i+1; j<array.length; j++)
			{
			if(array[i]===array[j])
				{
				count++;
				}
			}
		}
		return count;
	}	
	console.log(dublicateNum(array));
	
	
	
	
	