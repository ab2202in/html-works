// //1
// {
//     function double(Numbers) {
//         let doubleArr = Numbers.map((element) => {
//             return element * 2;
//         });
//         return doubleArr;
//     }
//     let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     console.log(`array is : ${Numbers}`);
//     let arraydouble = double(Numbers);
//     console.log("doubled array : ", arraydouble);
// }

// //2
// {
//     function findAllEven(Numbers) {
//         let allEven = Numbers.filter((item) => {
//             return item % 2 == 0;
//         });
//         return allEven;
//     }
//     let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     console.log(`array is : ${Numbers}`);
//     let allEven = findAllEven(Numbers);
//     console.log("all even numbers of the array : ", allEven);
// }
str = "a,b,c,d,e,f,g,h,i";
function getVowels(str) {
    var vowelsCount = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
let count = getVowels(str);
console.log("count of vowels in the given array : ", count);