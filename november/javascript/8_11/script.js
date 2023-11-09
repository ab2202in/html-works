console.log("welcome to javascript hijo de puta")
console.log(window)
// var i;
// i= "hello"
// console.log("i : ",i)

// var a= 100;
// console.log("a : ",a)

// var str= "this is a string";
// console.log("str :",str);
// console.log("type of str : ", typeof str);

// var num= 1001011;
// console.log("num :",num);
// console.log("type of num : ", typeof num);

// var bool= true;
// console.log("bool :",bool);
// console.log("type of bool : ", typeof bool);

// var a1= undefined;
// console.log("a1 :",a1);
// console.log("type of a1 : ", typeof a1);

// var b1= null;
// console.log("b1 :",b1);
// console.log("type of b1 : ", typeof b1);

// document.write("cristiano ronaldo")

var str=" Hello,World "

console.log("length of the string : ",str.length);
console.log("uppercase : ",str.toLocaleUpperCase());
console.log("lowercase : ",str.toLocaleLowerCase());
console.log(str.toUpperCase().length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log("trim :",str.trim());
console.log("trimmed length :",str.trim().length);
console.log("trimmed end of the string : ",str.trimEnd());
console.log("trimmed start of the strong : ",str.trimStart());

console.log("trimmed end of the string : ",str.trimEnd().length);
console.log("trimmed start of the strong : ",str.trimStart().length);

console.log("substring : ",str.substring(1,3));
console.log("replace :",str.replace("Hello","Chalo"));
console.log("startswith : ",str.startsWith(" Hello"));
console.log("endswith : ",str.endsWith("old"));

console.log("split : ",str.split(","));
console.log("join : ",str.split(",").join(","));