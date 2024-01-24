async function getData(){

    let data =await fetch('http://localhost:5500/getData');
    console.log("data : ",data);

    let parsedData = await data.json();
    console.log("parsedData : ",parsedData);

    let content = document.getElementById("content");
    console.log("content : ",content);

    let rows ="";

    for(let i =0 ;i<parsedData.length; i++){
        rows = rows+`
       
        ${parsedData[i]._id}
        <input type="text" name ="name" id="name-${parsedData[i]._id}" value="${parsedData[i].name}" disabled = true><br>
        <input type="tel" name ="phone" id="phone-${parsedData[i]._id}" value = "${parsedData[i].phone}" disabled = true><br>
        <input type="email" name ="email" id="email-${parsedData[i]._id}" value = "${parsedData[i].email}" disabled = true><br>
        <button onClick="handleEdit('${parsedData[i]._id}')">EDIT</button><br>
        <button onClick="handleSave('${parsedData[i]._id}')">SAVE</button><br>
        <button onClick="handleDelete('${parsedData[i]._id}')">DELETE</button><br>
        `
    }

    content.innerHTML = rows;
}

getData();

function handleEdit(id){


    let name =document.getElementById(`name-${id}`);
    name.disabled =false;

    let phone =document.getElementById(`phone-${id}`);
    phone.disabled =false;

    let email =document.getElementById(`email-${id}`);
    email.disabled =false;

}



async function handleSave(id){


    let nameTag =document.getElementById(`name-${id}`);
    let name = nameTag.value;

    let phoneTag =document.getElementById(`phone-${id}`);
    let phone = phoneTag.value;

    let emailTag =document.getElementById(`email-${id}`);
    let email = emailTag.value;

    let data ={
        id,
        name,
        phone,
        email,
    }

    let jsonData =JSON.stringify(data);
    
    let response = await fetch('/editData',{
        method : "PUT",
        headers : {
            "Content-Type" : "applictaion/json",
        },
        body : jsonData,
    });

    let parsed_response = await response.text();
    console.log("parsed_response : ",parsed_response);

    if (parsed_response == "success") {
        getData();
        alert ("updation success");
    }else {
        alert("updation failed");
    }


    
}


async function handleDelete(id){

    let nameTag =document.getElementById(`name-${id}`);
    let name = nameTag.value;

    let phoneTag =document.getElementById(`phone-${id}`);
    let phone = phoneTag.value;

    let emailTag =document.getElementById(`email-${id}`);
    let email = emailTag.value;

    let data ={
        id,
        name,
        phone,
        email,

    }

    let jsonData =JSON.stringify(data);
    
    let response = await fetch('/deleteData',{
        method : "DELETE",
        headers : {
            "Content-Type": "application/json",
        },
        body : jsonData,
    });

    getData();

    let parsed_response = await response.text();

    if(parsed_response == "success") {

        alert("Deletion Successful");
    } else {
        alert("Deletion Failed");
    }
}

