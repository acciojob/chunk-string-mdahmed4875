function stringChop(str, size) {
  // your code here
	let ans=[];
	let n=str.length;
	for(let i=0;i<n;i+=size){
		ans.push(str.substring(i,i+size));
	}
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
