console.log("javascript regular expressions")

str1='the cat is about to die';
str2='rat is not cat';
str3=`red meat is 
good meat`;




const regexp1 = /a/; //checks whether the expression is true od false
const resultexp1 = regexp1.test(str1);
console.log("result 01 :",resultexp1);

const regexp2 = /A/i; //check if its case sensitive also
const resultexp2 = regexp2.test(str1);
console.log("result 02 :",resultexp2);

const regexp3 = /ab/; //checks for a combination of 'ab' in it
const resultexp3 = regexp3.test(str1);
console.log("result 03 :",resultexp3);

const regexp4 = /[abcdefg]b/; //checks for any letters that are provided in it preceeding the letter
const resultexp4 = regexp4.test(str1);
console.log("result 04 :",resultexp4);

const regexp5 = /[a-z]a/; // check whether there is any letter before 'c'(a to z)
const resultexp5 = regexp5.test(str1);
console.log("result 05 :",resultexp5);

const regexp6 = /[a-z0-9]a/i; // check whether there is any letter before 'c'(a to z) and also number from 0-9
const resultexp6 = regexp6.test(str1);
console.log("result 06 :",resultexp6);

const regexp7 = /^rat/i; // check whether rat is the start of the string
const resultexp7 = regexp7.test(str2);
console.log("result 07 :",resultexp7);

const regexp8 = /cat$/i; // check whether cat is the end of the string
const resultexp8 = regexp8.test(str2);
console.log("result 08 :",resultexp8);

const regexp9 = /^good/im; // check whether good starts in multiline too
const resultexp9 = regexp9.test(str3);
console.log("result 09 :",resultexp9);

const regexp10 = /good$/im; // check whether good ends string in multiline
const resultexp10 = regexp10.test(str3);
console.log("result 10 :",resultexp10);

const regexp11 = /goods?/im;  //letter preceeding symbol '?' is optionally checked
const resultexp11 = regexp11.test(str3);
console.log("result 11 :",resultexp11);

const regexp12 = /good(ab)?/im; //(values) preceeding symbol '?' is optionally checked
const resultexp12 = regexp12.test(str3);
console.log("result 12 :",resultexp12);

const regexp13 = /meat*$/i; //multiple value can be occured multiple times before the symbol '?'
const resultexp13 = regexp13.test(str3);
console.log("result 13 :",resultexp13);

const regexp14 = /meats+$/im; //multiple value can be occured multiple times before the symbol '+' atleat one occurance needed
const resultexp14 = regexp14.test(str3);
console.log("result 14 :",resultexp14);

const regexp15 = /meats.$/im; //any value after the '.' can occur but only a character
const resultexp15 = regexp15.test(str3);
console.log("result 15 :",resultexp15);

const regexp16 = /mea.*$/im; //any value can occur and multiple characters too
const resultexp16 = regexp16.test(str3);
console.log("result 16 :",resultexp16);

{
const u_name = /^[a-z][a-z0-9_]*$/i;

function check(value){
    const result = u_name.test(value);

    if(result){
        return 'VALID';
    }else{
        return 'INVALID';
    }
}

const value ="a_000hxx";

 let validation = check(value);
 console.log("result :",validation);

// let value = document.getElementsByClassName('uname').value;
// error.innerHTML =uog;

// function onChange(arg){
//     let validation_result = check(value);
// }
}

let str5 = "a-b-c-d";

let replace1 =str5.replace(/-/,':');
console.log("replaced : ",replace1);

let replace2 =str5.replace(/-/g,':');
console.log("replaced : ",replace2);

let str6 ="22-02-02";

let replace3 =str6.replace(/(\d{2})$/,'20$1');
console.log("replaced : ",replace3);

// {

//     let value = document.getElementsByClassName('email_input').value;
//     const check_email = /^[a-z][a-z0-9_]*$@gmail.com$/i;

//     function email(value){
//         const emails = check_email.test(value);

//         if (emails){
//             document.write
//         }else{
         
//         }
//     }

    

// }

const regexp17 =/[kjm]/i; // any one of the k or j or m should present
const result17 = regexp17.test(str1);
console.log("result 17 : ",result17 );


const regexp18 =/[^kjm]/i; //none of the k or j or m is present
const result18 = regexp18.test(str1);
console.log("result 18 : ",result18 );


const regexp19 =/[H+]/i; //atleat there should be an H
const result19 = regexp19.test(str1);
console.log("result 19 : ",result19 );

const regexp20 =/[O$]/i; // ends with O
const result20 = regexp20.test(str1);
console.log("result 20 : ",result20 );



const regexp21 =/O?$/i; // ends with O is optional
const result21 = regexp21.test(str1);
console.log("result 21 : ",result21 );

const regexp22 =/O+$/i; // atleast an O is required
const result22 = regexp22.test(str1);
console.log("result 22 : ",result22 );


const regexp23 =/L{2}o$/i; // o shold be exactly between 2 L's
const result23 = regexp23.test(str1);
console.log("result 23 : ",result23 );


const regexp24 =/L{2,4}o$/i; // o shold be exactly between 2 to 4 L's
const result24 = regexp24.test(str1);
console.log("result 24 : ",result24 );


const regexp25 =/HeL{2,4}o$/i; // o shold be exactly between 2 to 4 L's and o is required
const result25 = regexp25.test(str1);
console.log("result 25 : ",result25 );

const regexp26 =/HeL{2,}o$/i; // 2 or more L's
const result26 = regexp26.test(str1);
console.log("result 26 : ",result26 );

const regexp27 =/\d/i; // digits
const result27 = regexp27.test(str1);
console.log("result 27 : ",result27 );


const regexp28 =/\D/i; // non-digits 
const result28 = regexp28.test(str1);
console.log("result 28 : ",result28 );

const regexp29 =/./i; // if there is a .
const result29 = regexp29.test(str1);
console.log("result 29 : ",result29 );

const regexp30 =/\./i; // if there a . anywhere on the string
const result30 = regexp30.test(str1);
console.log("result 30 : ",result30 );


//backslash is used to escape from special characters '\'