// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function reverse(n){
    var a;
    for (var i = n.length - 1; i >= 0; i--){
        a = n[i];
    }
    return a;
}

var result = reverse(34223);
console.log(result);