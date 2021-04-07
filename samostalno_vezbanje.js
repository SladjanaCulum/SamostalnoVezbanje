//kreiranje variabli u js

var name = 'Sladjana';
var age = 28;
var isMarried = true;

// drugi nacin kreiranja varijabli

var name = 'Slobodan', godine = 30, ozenjen = true;
console.log(name + ' ' + godine + ' ' + ozenjen);

// ispisivanje varijabli

console.log(ime + ' ' + age + ' ' + isMarried);

// deklarisanje varijabli

var nickName;

// dodeljivanje vrednosti

nickName = 'Sladja';
console.log(nickName);

console.log('We\'ll never give up');

//number

var a = 5;
a = 5.5;
a = 5e-5;
a = 5e+5;
console.log(a);

var b = 15/0;
console.log(b);

b = null;
console.log(b);

b = !!'';
console.log(typeof b);

//aritmeticki operatori

a = 5;
b = 7;
a += 15
console.log(a); //5+15

a -= 8;
console.log(a); //5-8

a *= 3;
console.log(a); //5*3

a /= 7;
console.log(a); //5/7

a %= 7;
console.log(a); //ostatak je 0+5=5

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// string operatori

name = 'Sladjana';
var lastName = 'Culum';

console.log(name + lastName);

lastName = 'Culum';
name = '\n1\n2\n3\n'; // \n sluzi da reci pise u novom redu ili recenice, stoji na pocetku da razdoji
//od predhodnog i stoji na kraju kako bi razdvojio od sledeceg
console.log(lastName + name);

name = 'Sladjana\tCulum'; // \t znaci pomeri za jedan tabs
console.log(name);

var c;
console.log(typeof c);

var s = '1s';
s++;
console.log(s);

var proveri = !!'false';
console.log(proveri);

var prov = !!undefined;
console.log(prov);

console.log(typeof - Infinity);
console.log(10 % '0');
console.log(undefined == null);
console.log(false === '');
console.log(typeof 2e+5);

var d = 3e+3;
d++;
console.log(d);

var fName = 'Slobodan';
fName += 'Culum';
console.log(fName);

//Write a program that compares two numbers and display the larger.
// Result should be displayed in the console.

var e = 5;
var f = 8;

if (e > f) {
    console.log('veci broj je ' + e);
} else {
    console.log('veci broj je ' + f);
}

// Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
// Sample numbers: 3, 4, 9 (check one at the time)
// Output: odd, even, odd

a = 3;
b = 4;
c = 9;

if (a % 2 === 0){
    console.log('even');
} else {
    console.log('odd')
}

if (b % 2 === 0){
    console.log('even');
} else {
    console.log('odd')
}

if (c % 2 === 0){
    console.log('even');
} else {
    console.log('odd')
}

// switch

// 1.	Write a program that shows text representation of a day in a week for a number input from 1 to 7.
//  Print output in console. 
// For input 1, output should be “Monday”.

var daniUNedelji = 8;

switch (daniUNedelji){
    case 1: 
        console.log('Ponedeljak');
        break;
    case 2:
        console.log('Utorak');
        break;
    case 3:
        console.log('Sreda');
        break;
    case 4:
        console.log('Cetvrtak');
        break;
    case 5:
        console.log('Petak');
        break;
    case 6:
        console.log('Subota');
        break;
    case 7:
        console.log('Nedelja');
        break;
    default:
        console.log('Mora da bude izmedju 1 i 7.');
        break;
}

// 3.	Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

var dayInWeek = 7;

switch (dayInWeek) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Radni je dan.');
        break;
    case 6:
    case 7:
        console.log('Vikend je :).');
        break;
    default:
        console.log('Mora da bude izmedju 1 i 7.');
        break;
}

console.log(typeof !!"somestring");
console.log(typeof 2);
console.log(Infinity - Infinity);

console.log("Osecam se \"lose");

var result = '', a = 0, b = 1;
if (a > 2 || a < -2) {
   result = 'a is not between -2 and 2';
} else if (a === 0 && b === 0) {
   result = 'both a and b are zeros';
} else if (a === b) {
   result = 'a and b are equal';
} else {
   result = 'I give up';
}
console.log(result);

var result = '', a = 0, b = 1;
if (a === 1) {
   if (b === 2) {
       result = 'a is 1 and b is 2';
   } else {
       result = 'a is 1 but b is not 2';
   }
} else {
   result = 'a is not 1, no idea about b';
}
console.log(result);

var result = "";
if (typeof somevar !== "undefined") {
   result = "yes";
}
console.log(result);

