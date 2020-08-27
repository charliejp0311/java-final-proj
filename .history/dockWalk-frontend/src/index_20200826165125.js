document.addEventListener("DOMContentLoaded", function () {
    let body = document.getElementsByTagName('body')
    body.innerText = fetch('http://localhost:3000/docks').then(resp => resp.json())
});