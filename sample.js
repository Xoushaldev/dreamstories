// Hello world
// console.log('Hello world');

// Variables & data types
let saiyanName = 'Goku'; // string
let age = 38; // number
const pi = 3.14; // number
const isPureSaiyan = true; // boolean
let finalForm = undefined; // undefined
let powerLimit = null; // null

// Try: variables & data types
// console.log(saiyanName, age, pi, isPureSaiyan);

// saiyanName = 'Vegeta';
// console.log(saiyanName);

// console.log(finalForm);
// console.log(powerLimit);

// age = 'secret';
// console.log(age);

// pi = 4.12; // Throws an error

// Objects
const saiyan = {
	name: 'Goku',
	age: 38,
	isPureSaiyan: true,
	finalForm: undefined,
	powerLimit: null,
	myObject: {
		hi: 'hello',
	},
};

// Try: objects
// console.log(saiyan);
// console.log(saiyan.name);

// saiyan.name = 'Vegeta';
// saiyan.age = 48;
// console.log(saiyan);
// console.log(saiyan.myObject.hi);

// Arrays
const randomArray = [
	'hello',
	70,
	3.14,
	false,
	undefined,
	null,
	{
		foo: 'bar',
	},
	['one', 2],
];

// Try arrays
// console.log(randomArray);
// console.log(randomArray[1]);
// console.log(randomArray[4]);
// console.log(randomArray[6].foo);
// console.log(randomArray[7][0]);

// randomArray[0] = false;
// console.log(randomArray);

// Functions
function logGreet() {
	console.log('hello');
}

function greet() {
	return 'hello world';
}

function greetSomeone(name) {
	return `hello ${name}`;
	// return 'hello ' + name;
}

function add(x, y) {
	return x + y;
}

// Try: functions
const greetHello = greet();
logGreet();

console.log(greetHello);
console.log(greetHello);

console.log(greetSomeone('Goku'));
// console.log(greetSomeone());

console.log(add(1, 2));
