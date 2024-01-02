

// // console.log(this); //always refers to current object that have been executed or declared or present.


// // let obj ={
// //     name : "john",
// //     getAge: function (){
// //         console.log(this);
// //     }
// // }


// //    function greet(message,message1){
// //     console.log("message : ",message);
// //     console.log("message1 : ",message1);

// //     console.log("this : ",this);
// //     console.log("this : ",this.name);

// //    }

// // //    greet("hello");
// // //    //call method 
// // //    //function is also called.
// // //    greet.call(obj,"hello","hello1");


// // //    //bind method
// // //    //function is not returned. have to call separately
// // //    let boundgreet = greet.bind(obj,"hello","hello1");
// // //    console.log("boundgreet : ",boundgreet);
// // //    boundgreet();

// //    //apply method
// //    greet.apply(obj,["hello","hello1"])

// // {
// //     let obj = {
// //         name: "harry",
// //         age: 30,
// //         greeting: function () {
// //             console.log("name : ", this.name);
// //             console.log("age : ", this.age);
// //         }
// //     }

// //     obj.greeting();

// //     //construction function

// //     function Person(name, age) {
// //         this.name = name;
// //         this.age = age;
// //         this.greeting = function () {
// //             console.log("name : ", this.name);
// //             console.log("age : ", this.age);
// //         }
// //     }

// //     const person1 = new Person("aadhi", 21);
// //     person1.greeting();
// //     const person2 = new Person("aaarthi", 23);
// //     person2.greeting();
// //     const person3 = new Person("abin", 22);
// //     person3.greeting();
// //     const person4 = new Person("anwarsha", 24);
// //     person4.greeting();

// // }



//{
    let obj = {
        brand: "",
        name: "",
        model: "",
        price: "",
        getInfo: function () {
            console.log("Brand : ", this.brand);
            console.log("Name  : ", this.name);
            console.log("Model : ", this.model);
            console.log("Price : ", this.price);
        }
    }

    //     function Cars(brand, name, model, price) {
    //         this.brand = brand;
    //         this.name = name;
    //         this.model = model;
    //         this.price = price;
    //         this.getInfo = function () {
    //             console.log("brand : ", this.brand);
    //             console.log("name  : ", this.name);
    //             console.log("model : ", this.model);
    //             console.log("price : ", this.price);
    //         }
    //     }
    // }

    // const car1 = new Cars("Mercedes-Benz","S-Class","sedan","1.64cr");
    // car1.getInfo();
    // const car2 = new Cars("Mercedes-Benz","E-Class","sedan","80.9lac");
    // car2.getInfo();
    // const car3 = new Cars("Toyota","Fortuner","SUV","48lac");
    // car3.getInfo();
    // const car4 = new Cars("Audi","A4","sedan","51.8lac");
    // car4.getInfo();
    // const car5 = new Cars("BMW","7 series","sedan","1.7cr");
    // car5.getInfo();
    // const car6 = new Cars("Land Rover Range Rover","Velar","SUV","94.3lac");
    // car6.getInfo();
    // const car7 = new Cars("Ford","Mustang","SUV","80lac");
    // car7.getInfo();

    // // Cars.prototype.getCars =function(){
    // //     return thisRating;
    // // }


    class Cars {
        brand;
        model;
        name;
        price;

        constructor(brand, model, name, price) {
            this.brand = brand;
            this.model = model;
            this.name = name;
            this.price = price;
        }
        getInfo() {
            console.log("brand : ", this.brand);
            console.log("model : ", this.model);
            console.log("name  : ", this.name);
            console.log("price : ", this.price);
        }

    }

    const car1 = new Cars("Mercedes-Benz", "S-Class", "sedan", "1.64cr");
    car1.getInfo();
    const car2 = new Cars("Mercedes-Benz", "E-Class", "sedan", "80.9lac");
    car2.getInfo();
    const car3 = new Cars("Toyota", "Fortuner", "SUV", "48lac");
    car3.getInfo();
    const car4 = new Cars("Audi", "A4", "sedan", "51.8lac");
    car4.getInfo();
    const car5 = new Cars("BMW", "7 series", "sedan", "1.7cr");
    car5.getInfo();
    const car6 = new Cars("Land Rover Range Rover", "Velar", "SUV", "94.3lac");
    car6.getInfo();
    const car7 = new Cars("Ford", "Mustang", "SUV", "80lac");
    car7.getInfo();  

