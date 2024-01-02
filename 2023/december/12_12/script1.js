
//asynchronous operations
//web space environment
//callback queue
//(microtask queue)-for promises
//event loop
//callstack


let xhr = new XMLHttpRequest();
xhr.open("get", 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.onreadystatechange = function () {
    console.log("readystate : ", xhr.readyState);

    let content = document.getElementById('content');
    let datas = '';

    if (xhr.readyState == 4) {
        console.log("response : ", xhr.response);
        console.log("type of response : ", typeof (xhr.response));

        let parse = JSON.parse(xhr.response);
        console.log("parsed response : ", parse);
        console.log("type of parsed response : ", typeof (parse));

        for (let i = 0; i < parse.length; i++) {
            datas = datas + `<tr>
            <td>${parse[i].id}</td>
            <td>${parse[i].name}</td>
            <td>${parse[i].username}</td>
            <td>${parse[i].website}</td>
            </tr>`;
        }
        content.innerHTML = datas;

    }
}