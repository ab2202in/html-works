// myNums= document.getElementById('num').value;
let myNums = [1, 2, 3, 4, 5, 6];

let sum = 0;
let avg = 0;

for (let i = 0; i < myNums.length; i++) {
    sum += myNums[i];
    avg = sum / (i + 1);
}
console.log(sum);
console.log(avg);

// function sum(){
// let sum = 0;
// for (let i = 0; i < myNums.length; i++) {
//     sum += myNums[i];
    
// }
// document.getElementById("res").innerHTML = sum;

// }


// // 

// function avg(){
//     let avg;
//     for (let i = 0; i < myNums.length; i++) {
//         avg = sum / (i + 1);
        
//     }
//     document.getElementById("res").innerHTML = sum;
    
//     }