var fibonacci = function(n){
	if (n <= 1){
		return 1;
	}
	return n * fibonacci(n-1);
}

console.log('fibonacci(3) = ' + fibonacci(3));
console.log('fibonacci(4) = ' + fibonacci(4));

var gcd = function(a,b){
	if (a > b){
		return gcd(b,a);
	}
	while(b != 0){
		var temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

console.log('gcd(6,24) = ' + gcd(6,24));
console.log('gcd(6,21) = ' + gcd(6,21));

var listOfStudents = ['Masha', 'Adrian', 'David', 'Eric', 'Josh', 'Jerome', 'Henry', 'Jackie', 'Giorgio', 'Karen', 'Sonal', 'Xavier', 'Bermet', 'Alex', 'Iris', 'Manahal', 'Donia', 'Md', 'Connie', 'Lisa', 'Xing', 'Angelica', 'Angel', 'Augie', 'Dimitriy', 'Yiduo', 'Gordon', 'Tiffany', 'Clive', 'Jonathan', 'Sasha', 'Daniel'];

var randomStudent = function(){
	var size = listOfStudents.length;
	var randIndex = Math.floor(Math.random() * size);
	return listOfStudents[randIndex];
}

var randLoopCounter = 0;

while(randLoopCounter < 10){
	console.log('randomStudent() = ' + randomStudent());
	randLoopCounter++;
}
