function trailingZeros(n) {
	n = parseInt(n);
	let fact = 1;
	for(let i=1;i<=n;i++){
		fact = fact * i;
	}
	let count = 0;
	let str = String(fact);
	for(let i=str.length-1,i>=0;i--){
		if(str[i]==0){
			count++;
		} else {
			break;
		}
	}
	console.log(count);
}

const input = prompt('Enter a number');
alert(trailingZeros(input));
