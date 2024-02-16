async function getData() {

    let folderPath = "./datas";
    let fileName = "datas.json";
    let filePath = path.join(folderPath, fileName);
    console.log("filepath :", filePath);


    let parsedData = await fetch('/datas.json');
    // console.log("data : ",data);

    // let parsedData = await data.json();
    // console.log("parsedData : ",parsedData);

    let content = document.getElementById("content");
    console.log("content : ", content);

    let rows = "";

    for (let i = 0; i < parsedData.length; i++) {
        rows = rows + `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="text" name ="name" id="name-${parsedData[i]._id}" value="${parsedData[i].name}" disabled = true></td>
        <td><input type="text" name ="age" id="age-${parsedData[i]._id}" value = "${parsedData[i].age}" disabled = true></td>
        <td><input type="text" name ="place" id="place-${parsedData[i]._id}" value = "${parsedData[i].place}" disabled = true></td>
        <td><button onClick="handleEdit('${parsedData[i]._id}')">EDIT</button></td>
        <td><button onClick="handleSave('${parsedData[i]._id}')">SAVE</button></td>
        <td><button onClick="handleDelete('${parsedData[i]._id}')">DELETE</button></td>
        </tr>
        `
    }

    content.innerHTML = rows;
}

getData();

function handleEdit(id) {


    let name = document.getElementById(`name-${id}`);
    name.disabled = false;

    let age = document.getElementById(`age-${id}`);
    age.disabled = false;

    let place = document.getElementById(`place-${id}`);
    place.disabled = false;


}



async function handleSave(id) {


    let nameTag = document.getElementById(`name-${id}`);
    let name = nameTag.value;

    let ageTag = document.getElementById(`age-${id}`);
    let age = ageTag.value;

    let placeTag = document.getElementById(`place-${id}`);
    let place = placeTag.value;

    let data = {
        id,
        name,
        age,
        place,
    }

    let jsonData = JSON.stringify(data);

    let response = await fetch('/editData', {
        method: "PUT",
        headers: {
            "Content-Type": "applictaion/json",
        },
        body: jsonData,
    })

    let parsed_response = await response.text();
    console.log("parsed_response : ", parsed_response);

    if (parsed_response == "success") {

        alert("updation success");

    } else {
        alert("updation failed");
    }

    getData();

}


async function handleDelete(id) {

    let nameTag = document.getElementById(`name-${id}`);
    let name = nameTag.value;

    let ageTag = document.getElementById(`age-${id}`);
    let age = ageTag.value;

    let placeTag = document.getElementById(`place-${id}`);
    let place = placeTag.value;

    let data = {
        id,
        name,
        age,
        place,

    }

    let jsonData = JSON.stringify(data);

    let response = await fetch('/deleteData', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    });

    getData();

    let parsed_response = await response.text();

    if (parsed_response == "success") {

        alert("Deletion Successful");
    } else {
        alert("Deletion Failed");
    }
}


