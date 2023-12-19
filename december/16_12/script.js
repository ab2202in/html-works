const regexpDate= /^\d{1,2}-\d{1,2}-\d{4}$/i;
const regexpDate1 =/^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i;
function checkResult(value){
    const result =regexpDate1.test(value);
    if (result){
        return '';
    }else{
        return 'Invalid string';
    }
}
const value ="16-11-2002";
let validationResult = checkResult(value);
console.log("result : ",validationResult);
 function onchange(){
    const date = checkResult(arg.value);
    let label =document.getElementById('error');
    if (date){
        label.innerHTML= date;
    }else{
        label.innerHTML=date;
    }
 }