let myForm = document.getElementById('myform');
let arr = [];
myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var datas = {};
    

    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let uname = document.getElementById('userName').value;
    let email = document.getElementById('eMail').value;
    let pword = document.getElementById('password').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;


    datas.firstName = fname;
    datas.lastName = lname;
    datas.userName = uname;
    datas.email = email;
    datas.password = pword;
    datas.age = age;
    datas.address = address;
    datas.phone = phone;

    HandleData(datas);
});

function HandleData(datas) {
    console.log("Datas : ", datas);
    arr.push(datas);
    console.log("arr : ", arr);
}