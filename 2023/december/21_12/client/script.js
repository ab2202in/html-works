async function getData(){

    let data =await fetch('http://localhost:3000/getData');
    console.log("data : ",data);

    let parsedData = await data.json();
    console.log("parsedData : ",parsedData);

    let content = document.getElementById("content");
    console.log("content : ",content);

    let rows ="";

    for(let i =0 ;i<parsedData.length; i++){
        rows = rows+`
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="text" name ="fname" id="fname-${parsedData[i]._id}" value="${parsedData[i].fname}" disabled = true></td>
        <td><input type="text" name ="lname" id="lname-${parsedData[i]._id}" value ="${parsedData[i].lname}" disabled =true></td>
        <td><input type="username" name ="uname" id="uname-${parsedData[i]._id}" value = "${parsedData[i].uname}" disabled = true></td>
        <td><input type="email" name ="eMail" id="email-${parsedData[i]._id}" value = "${parsedData[i].email}" disabled = true></td>
        <td><input type="password" name ="pWord" id="pword-${parsedData[i]._id}" value = "${parsedData[i].pword}" disabled = true></td>
        <td><input type="number" name ="age" id="age-${parsedData[i]._id}" value = "${parsedData[i].age}" disabled = true></td>
        <td><input type="text" name ="place" id="place-${parsedData[i]._id}" value = "${parsedData[i].place}" disabled = true></td>
        <td><input type="tel" name ="phn" id="phone-${parsedData[i]._id}" value = "${parsedData[i].phone}" disabled = true></td>
        <td><button onClick="handleEdit('${parsedData[i]._id}')">EDIT</button></td>
        <td><button onClick="handleSave('${parsedData[i]._id}')">SAVE</button></td>
        <td><button onClick="handleDelete('${parsedData[i]._id}')">DELETE</button></td>
        </tr>
        `
    }

    content.innerHTML = rows;
}

getData();

function handleEdit(id){


    let fname =document.getElementById(`fname-${id}`);
    fname.disabled =false;

    let lname =document.getElementById(`lname-${id}`);
    lname.disabled =false;

    let uname =document.getElementById(`uname-${id}`);
    uname.disabled =false;

    let email =document.getElementById(`email-${id}`);
    email.disabled =false;

    let pword =document.getElementById(`pword-${id}`);
    pword.disabled =false;

    let age =document.getElementById(`age-${id}`);
    age.disabled =false;

    let place =document.getElementById(`place-${id}`);
    place.disabled =false;

    let phone =document.getElementById(`phone-${id}`);
    phone.disabled =false;
}

async function handleSave(id){


    let fnameTag =document.getElementById(`fname-${id}`);
    let fname = fnameTag.value;

    let lnameTag =document.getElementById(`lname-${id}`);
    let lname = lnameTag.value;

    let unameTag =document.getElementById(`uname-${id}`);
    let uname = unameTag.value;

    let emailTag =document.getElementById(`email-${id}`);
    let email = emailTag.value;

    let pwordTag =document.getElementById(`pword-${id}`);
    let pword = pwordTag.value;

    let ageTag =document.getElementById(`age-${id}`);
    let age = ageTag.value;

    let placeTag =document.getElementById(`place-${id}`);
    let place = placeTag.value;

    let phoneTag =document.getElementById(`phone-${id}`);
    let phone = phoneTag.value;

    let data ={
        id,
        fname,
        lname,
        uname,
        email,
        pword,
        age,
        place,
        phone,

    }

    let jsonData =JSON.stringify(data);
    
    let response = await fetch('http://localhost:3000/editData',{
        method : "PUT",
        headers : {
            "Content-Type" : "applictaion/json",
        },
        body : jsonData,
    });

    let parsed_response = await response.text();
    console.log("parsed_response : ",parsed_response);

    if (parsed_response == "success") {
        alert ("updation success");
    }else {
        alert("updation failed");
    }

    
}


async function handleDelete(id){

    let fnameTag =document.getElementById(`fname-${id}`);
    let fname = fnameTag.value;

    let lnameTag =document.getElementById(`lname-${id}`);
    let lname = lnameTag.value;

    let unameTag =document.getElementById(`uname-${id}`);
    let uname = unameTag.value;

    let emailTag =document.getElementById(`email-${id}`);
    let email = emailTag.value;

    let pwordTag =document.getElementById(`pword-${id}`);
    let pword = pwordTag.value;

    let ageTag =document.getElementById(`age-${id}`);
    let age = ageTag.value;

    let placeTag =document.getElementById(`place-${id}`);
    let place = placeTag.value;

    let phoneTag =document.getElementById(`phone-${id}`);
    let phone = phoneTag.value;

    let data ={
        id,
        fname,
        lname,
        uname,
        email,
        pword,
        age,
        place,
        phone,

    }

    let jsonData =JSON.stringify(data);
    
    let response = await fetch('http://localhost:3000/deleteData',{
        method : "DELETE",
        headers : {
            "Content-Type": "application/json",
        },
        body : jsonData,
    });

    let parsed_response = await response.text();

    if(parsed_response == "success") {
        alert("Deletion Successful");
    } else {
        alert("Deletion Failed");
    }
}