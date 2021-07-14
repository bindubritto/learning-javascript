const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');


const sendRequest = function (method, url) {
    const xhr = new XMLHttpRequest();

    // Request prepare phase
    xhr.open(method, url);
    xhr.responseType = "json";
    // Request send phase
    xhr.send();

    // After server response
    xhr.onload = function() {
        const result = xhr.response;
        console.log((result));
    }
}



const getData = function() {
    const xhr = new XMLHttpRequest();

    // Request prepare phase
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhr.responseType = "json";

    // Request send phase
    xhr.send();

    xhr.onload = function() {
        const result = xhr.response;
        console.log((result));
    }


}

const sendData = function() {
    
}


getButton.addEventListener("click", getData);
sendButton.addEventListener("click",sendData);
