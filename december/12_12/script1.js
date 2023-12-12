
    //asynchronous operations
    //web space environment
    //callback queue
    //(microtask queue)-for promises
    //event loop
    //callstack


    let xhr = new XMLHttpRequest();
    xhr.open ("get",'https://jsonplaceholder.typicode.com/users');
    xhr.send();
     xhr.onreadystatechange = function(){
        console.log("readystate : ",xhr.readyState);

        if (xhr.readyState ==4){
            console.log("response : ", xhr.response);
            console.log("type of response : ", typeof(xhr.response));

            let parse =JSON.parse(xhr.response);
            console.log("parsed response : ", parse);
            console.log("type of parsed response : ", typeof(parse));


        }
     }