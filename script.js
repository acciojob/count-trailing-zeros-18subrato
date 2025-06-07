function trailingZeros(n) {
	n = parseInt(n);
	let fact = 1;
	for(let i=1;i<=n;i++){
		fact = fact * i;
	}
	let count = 0;
	let str = String(fact);
	for(let j=str.length-1,j>=0;j--){
		if(str[j]==0){
			count++;
		} else {
			break;
		}
	}
	console.log(count);
}

const input = prompt('Enter a number');
alert(trailingZeros(input));
