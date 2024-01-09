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
        <td>${parsedData[i].fname}</td>
        <td>${parsedData[i].lname}</td>
        <td>${parsedData[i].uname}</td>
        <td>${parsedData[i].eMail}</td>
        <td>${parsedData[i].pWord}</td>
        <td>${parsedData[i].age}</td>
        <td>${parsedData[i].place}</td>
        <td>${parsedData[i].phn}</td>
        </tr>
        `
    }

    content.innerHTML = rows;
}

getData();