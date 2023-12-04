

console.log(this); //always refers to current object that have been executed or declared or present.


let obj ={
    name : "john",
    getAge: function (){
        console.log(this);
    }
}


   function greet(message,message1){
    console.log("message : ",message);
    console.log("message1 : ",message1);

    console.log("this : ",this);
    console.log("this : ",this.name);

   }

//    greet("hello");
//    //call method 
//    //function is also called.
//    greet.call(obj,"hello","hello1");


//    //bind method
//    //function is not returned. have to call separately
//    let boundgreet = greet.bind(obj,"hello","hello1");
//    console.log("boundgreet : ",boundgreet);
//    boundgreet();

   //apply method
   greet.apply(obj,["hello","hello1"]);