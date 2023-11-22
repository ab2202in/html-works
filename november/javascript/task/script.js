let x = 10;
const y = 20;
var z = 0; //correction : variable 'z' declared
x = y + z;
console.log(x); //correction : the value of 'x' is consoled

let greeting = "Hello";
if (greeting == "Hello") //correction : comparative operator changed
{
    console.log("Hi!");
} else {
    console.log("Goodbye!");
}

let num = '10';
let double = num * 2;
console.log(double);

let colors = ["red", "green", "blue", "white"]; //correction : added a new color to the index '3'
let favouriteColor = colors[3];
console.log(favouriteColor);

function add(x, y) {
    return x + y;
}

let result = add(5, 6); //correction : added the value of 'y' for this function
console.log(result);


let person = {
    firstName: "John",
    lastName: "Doe",
    age: '18'//correction : added object age
};

console.log(person.age);

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) //correction : corrected the looping parameter
{
    console.log(numbers[i]);
}

function multiply(x, y) {
    return x * y;
}

let product = multiply(3, 2); //correction : the data type of 'y' has been changed in the argument 
console.log("Product : ", product);

function greet(name) {
    return "Hello," + name;
}

let username = "Alice";
console.log(greet(username));

let age = 30; //correction : the data type of 'age' has been changed in the argument
console.log("Age in 5 years : ", age + 5);

let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: "A" },
    { name: "Charlie", grade: 92 },
];

for (let student of students) {
    if (student.grade >= 90 || student.grade == "A") //correction : added a new 
    {
        console.log(student.name + " has an A grade.");
    }
}

console.log("End of the code");
