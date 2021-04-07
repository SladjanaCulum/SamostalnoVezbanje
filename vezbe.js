var a = 5;
var b = 7;
var sum = a + b;
console.log(sum);

var ime = 'Sladjana';
console.log(ime);

// jednolinijski komentar

/* viselinijski komenatar
koji se pise u vise linija koda */

var name = 'Slobodan';
var age = 31;
var isMarried = true;
console.log(name + ' ' + age + ' ' + isMarried);

// deklarisanje varijable
var prezime;

// dodeljivanje vrednosti
prezime = 'Culum';

//ispisivanje vrednosti varijable
console.log(prezime);


//brojevi
var a = 5;
var b = 6.5;
var c = -7.7e5;

console.log(a, b, c);

//null
a = null;

console.log(a);
console.log(typeof a);

//operatori poredjenja
a = 25;
b = 35;
c = '25';

console.log(a == c);
console.log(a === c);
console.log(a !== c);
console.log(a != c);
console.log(a > b);
console.log(b < c);
console.log(a >= c);

//dario pojasnjenje
var isLoggedIn = false;
var isAdmin = false;

//first case
if (isLoggedIn) {
	console.log('ulogovan je')
}

//second case
if (isLoggedIn) {
	console.log('ulogovan je')
} else {
	console.log('nije ulogovan')
}

//third case
if (isLoggedIn) {
	console.log('ulogovan je')
} else if (isAdmin) {
	console.log('administrator je')
} else {
	console.log('nije nista')
}

isLoggedIn ? console.log('ulogovan je') : console.log('nije ulogovan');


var a;
var number = 12;

if (number > 0) {
	a = 'pozitivan';
} else {
	a = 'negativan';
}

a = (number > 0) ? 'pozitivan' : 'negativan';
