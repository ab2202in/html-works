// console.log("welcome to javascript hijo de puta")
// console.log(window)
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

// var str=" Hello,World "

// console.log("length of the string : ",str.length);
// console.log("uppercase : ",str.toLocaleUpperCase());
// console.log("lowercase : ",str.toLocaleLowerCase());
// console.log(str.toUpperCase().length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log("trim :",str.trim());
// console.log("trimmed length :",str.trim().length);
// console.log("trimmed end of the string : ",str.trimEnd());
// console.log("trimmed start of the strong : ",str.trimStart());

// console.log("trimmed end of the string : ",str.trimEnd().length);
// console.log("trimmed start of the strong : ",str.trimStart().length);

// console.log("substring : ",str.substring(1,3));
// console.log("replace :",str.replace("Hello","Chalo"));
// console.log("startswith : ",str.startsWith(" Hello"));
// console.log("endswith : ",str.endsWith("old"));

// console.log("split : ",str.split(","));
// console.log("join : ",str.split(",").join(","));

// var arr = [10,20,30,40,50,'hai','hello',"hey",true,false,undefined,null];

// console.log("arr : ", arr);
// console.log("type of : ",typeof arr);
// console.log("length of : ",arr.length);
// console.log("index of hello : ",arr.indexOf('hello'));
// console.log("index of 20 : ",arr.indexOf(20));
// console.log("join : ",arr.join(''))
// console.log("joined length : ",arr.join('').length);

// console.log("push : ",arr.push("end"),",","arr : ", arr);
// console.log("unshift : ",arr.unshift("first"),",","arr : ", arr);
// console.log("pop : ",arr.pop(),",","arr : ", arr);
// console.log("shift : ",arr.shift(),",","arr : ", arr);

// arr[2]=35;
// arr[3]=45;
// arr[4]=55;
// console.log("arr : ", arr);

// arr.splice(10,2);
// console.log("arr : ", arr);

// arr.splice(4,0,50);
// arr.splice(3,0,40);
// arr.splice(2,0,30);
// arr.splice(2,0,25);
// arr.splice(1,0,15);
// arr.splice(0,0,5);
// console.log("arr : ", arr);


// var obj = {
//     firstName : "Abin",
//     secondName : "Sasikumar",
//     age : 21,
//     Indian : true,
//     hobbies : ["sleeping","playing","working"],
// }

// console.log("first name : ", obj.firstName);
// console.log("second name : ", obj.secondName);
// console.log("age : ", obj.age);
// console.log("indian? : ", obj.Indian);
// console.log("hobbies : ", obj.hobbies);

// obj.mark1=50;
// obj.mark2=70;
// obj.mark3=75;
// obj.age=51;

// console.log("obj : ",obj);

// var a=12; //global scoped

// {
//     let b;
//     b=11;
//     const c=12;

//     console.log("b : ",b);
//     console.log("c : ",c);

// }

// let num1=10;
// let num2=100;

// if(num1 < num2)
// {
//     console.log(`Adithyan is gay`)
// }else if(num1 == num2)
// {
//     console.log(`Adithyan is not gay`)
// }
// else if(num2 < num1)
// {
//     console.log(`is Adithyan gay?`)
// }

//switch statement
// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Funday")
//         break;
// }

// // for loop
// for (var i = 0; i < 10; i++) {
//     console.log(i + 1);
// }

// // while loop
// let a = 0;
// while (a <= 10) {
//     console.log("Hello from adithyan's while loop");
//     a = a + 1;
// }
// do {
//     console.log("Hello from adithyan's do loop");
//     a = a + 1;
// }
// while (a <= 10);

// // break and continue
// for (let b = 0; b <= 10; b++) {
//     if (b == 5) {
//         continue;
//     }
//     if (b == 8) {
//         break;
//     }
//     console.log(b);
// }

// nested loop
// {
//     let string = '';
// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j < i; j++) {
//         string = string + '*';
//         console.log(string);
//     }
//     string = string + '\n'
// }
// }

// function printHello(){
//     console.log("hello");
// }
// printHello();

// function sum(a,b){
//     let sum;
//     sum=a+b;
//     console.log("Sum : ",sum );
// }
// sum(15,25);
// sum(309,976);

// function sumUptoTen() {
//     let sum = 0;
//     let i;
//     for (i = 1; i <= 10; i++) {
//         sum = sum + i;
//     }
//     console.log("sum of 10 numbers : ",sum);
// }


// sumUptoTen();

// function eveNumber(){
//     let i=0;
//     while(i<=20){
//         if(i%2 == 0){
//             console.log("even numbers :", i);
//         }
//         i++;
//     }

// }
// eveNumber();

// let  a=10;
//  function update(a){
//     a="new value";
//     console.log("from function : ",a);
//  }
//  update(a);
//  console.log("a : ",a);

// let arr=[10,20,30];
// function update(arr){
// arr[0]=100;
// console.log(" arr from function : ",arr);
// }
// update(arr);
// console.log("arr : ",arr);

// {
//     function outerFunction() {
//         const outervariable = 'from outer function';

//         function innerFunction() {
//             console.log("outerVariable : ", outervariable);
//         }

//         return innerFunction;
//     }

//     let result = outerFunction();
//     console.log("result : ", result);
//     result();
// }

// let content = document.getElementsByClassName("content");
// content[0].textContent = "some content";
// content[1].textContent = "some another content";

// let text = document.getElementById("text");
// text.textContent = "some bullshit";

// let para = document.getElementsByTagName("p");
// para[0].textContent = "some paragraph shit";

// let listItem = document.querySelector(".container .container1 ul li");
// listItem.textContent = "list item 1"


// let parag = document.getElementsByTagName("p");
// parag[1].textContent = "this is a paragraph";

// let contents = document.getElementsByClassName("textContent");
// contents[0].textContent = "text content 1";

// let texts = document.getElementById("textContentId");
// texts.textContent = "text content 2";

// let listItems = document.querySelector(".container3 .container4 ul li a");
// listItems.textContent = "home"

// // annonymus function
// const printHelloWorld = function () {
//     console.log("hail haidra")
// };
//  printHelloWorld();

// //  arrow functions

// const printAvengers = () => {
//     console.log("Avengers Assemble")
// };
// printAvengers();

// timer functions
// setTimeout( function(){
//     console.log("From space");
//     alert("the aliens are coming!!!!! ")
// },3000);

// setInterval(function(){
//     alert("suiiiiiiiiiiiiiiii")
// },3000);

// function putZero(sec) {
//     return sec < 10 ? "0" + sec : sec;
// }

// function show() {
//     var time = document.getElementById('time');
//     var dt = new Date();
//     var hours = dt.getHours();
//     var ampm = hours > 12 ? "pm" : "am";


//     time.innerHTML = putZero(hours % 12) + ":" + putZero(dt.getMinutes()) + ":" + putZero(dt.getSeconds()) + ampm;

//     setTimeout(function () {
//         show();
//     }, 1000);
// }

// show();

// //spread operator

// {
//     let arr = [1, 2, 3, 4, 5];
//     console.log("arr : ", arr);

//     let arr1 = [...arr, 6, 7, 8];
//     console.log("arr1 : ", arr1);


//     let obj = {
//         firstName: "John",
//         secondName: "Smith",
//         age: 38,
//     };
//     console.log("obj : ", obj);

//     let obj1 = { ...obj, spouse: "Jane", kids: 3, };
//     console.log("obj1 : ", obj1);

//     //destruturing

//     const [a, b, c, d, e] = arr;
//     console.log("a : ", a);
//     console.log("b : ", b);


//     const { firstName, secondName, age } = obj;
//     console.log("firstName : ", firstName);
//     console.log("secondName : ", secondName);
//     console.log("age : ", age);

// }

// {

//     const matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];

//     const [row1, row2, row3] = matrix;
//     const [a, b, c] = row1;
//     const [d, e, f] = row2;
//     const [g, h, i] = row3;

//     console.log("a : ", a);
//     console.log("b : ", b);
//     console.log("c : ", c);

//     console.log("d : ", d);
//     console.log("e : ", e);
//     console.log("f : ", f);

//     console.log("g : ", g);
//     console.log("h : ", h);
//     console.log("i : ", i);


//     const person ={
//         firstName: "John",
//         secondName: "Smith",
//         age: 38,
//         address :{
//             zipcode : '1001',
//             city : "New York",
//         }
//     }

//     const {firstName,secondName,age,address : {zipcode,city}}= person;
//     console.log("name : ",firstName + ' ' + secondName);
//     console.log("age : ",age);
//     console.log("city : ",city);
//     console.log("zipcode : ",zipcode);

// }

//multiplication table
// {
//     for (let i=1; i<=10; i++)
//     {
//         for (let j=1; j<=10; j++)
//         {
//             console.log(`${i}*${j}=${i*j}\n`);
//         }
//     }
// }


// sum of even and odd
{
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            console.log("Even : ", i);
            evenSum = evenSum + i;
        } else {
            console.log("Odd  : ", i);
            oddSum = oddSum + i;
        }
    }
    console.log("odd sum  : ", oddSum);
    console.log("even sum : ", evenSum);
}




{
    let arr = [10, 20, 5, 40, 50];
    console.log("array :",arr);

    function arrSum(arr) {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }

        // console.log("sum :", sum);
        return sum;
    }

    console.log("array sum: ", arrSum(arr));

    let average = arrSum(arr)/arr.length;
    console.log("array average : ",average);
}


{

    let arr=[10,-10,9,8,7,6];
    console.log("array : ",arr);

    function checkforNeg(arr){
        var newArr=[arr];
        for (let i=0;i<arr.length;i++){
            if(arr[i]<0){
                arr[i]= arr[i]*-1;
            }
        }
        return newArr;
      }
    console.log("new array : ",checkforNeg(arr));
}

{
   function countdown(n){
    if (n<=0){
        console.log("adithyan is gay friend!")
    }else{
        console.log(n);
        countdown(n-1);
    }
}

countdown (10); 
}


console.log("factorial ussing recursive function: ");

function fact(n){
    if (n==0 || n==1){
        return 1;
    }else{
        return n* fact(n-1);
    }
}
    let factorial= fact(6);
    console.log("factorial :" ,factorial)

    
    