// 1. Write a program that calculates the maximum of two given numbers.

function max(a, b){
    if(a > b){
       return a;
    }else {
        return b;
    }
}
var result = max(1, 5);
console.log(result);

// 2. Write a program that checks if a given number is odd.

function checks(a){
    if (a === 0){
        return "Number is zero";
    } else if (a % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}

var result = checks(6);
console.log(result);

// 3.	Write a program that checks if a given number is a three digit long number.

function digit(a){
    if (a > 99 && a < 1000){
        return "yes";
    } else {
        return "no";
    }
}

var result = digit(15);
console.log(result);

// 4.	Write a program that calculates an arithmetic mean of four numbers.

function aritm(a, b, c, d){
    var sum = a + b + c + d;
    var arithmetic = sum/4;
    return arithmetic;
}

var result = aritm(1, 2, 3, 4);
console.log(result);

// 5.	Write a program that calculates a number of digits of a given number. 

function number(m){
    var string = "";
    var numberOfDig = string + m.length;
    return numberOfDig;
}

var result = number("45700");
console.log(result);

// 6.	Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

function appear(arr){
    var e = 7;
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (e === arr[i]){
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr.length;
}

var array = [2, 4, 8, 7, 7, 1];
var result = appear(array);
console.log(result);


// 7.	Write a program that calculates the sum of odd elements of a given array. 

function sum(a){
    var sum = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i] % 2 !== 0){
            sum += a[i];
        }
    }
    return sum;
}
var f = [9, 5, 7, 1, 3];
var result = sum(f);
console.log(result);

// 8.	Write a program that calculates the number of appearances of a letter a in a given string. 
// Modify the program so it calculates the number of both letters a and A.

function letter(arr1){
    var str;
    for (var i = 0; i < arr1.length; i++){
        if (arr1[i] === "a" || arr1[i] === "A"){
            str++
        }
    }
    return str;
}

var string = "AshsaahsaaA";
var result = letter(string);
console.log()

// 9.	Write a program that concatenates a given string given number of times. 
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 
