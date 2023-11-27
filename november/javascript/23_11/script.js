// let a = document.getElementById('fact');

// function factorial(a) {

//     let fact = 1;
//     for (let i = a; i > 0; i--) {
//         fact = fact * i;
//     }
//     return fact;
//     let result = fact;
// }

// document.getElementById('result').innerHTML = fact;


function fact() {
    var i, num, f;
    f = 1;
    num = document.getElementById("num").value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    document.getElementById("res").innerHTML = f;
}