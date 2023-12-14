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