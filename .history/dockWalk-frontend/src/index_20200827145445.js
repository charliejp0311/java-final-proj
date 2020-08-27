document.addEventListener("DOMContentLoaded", function () {
    let body = document.getElementById('dock')
    let title = document.createElement("h2")
    title.innerText = "Welcome to the docks!"
    body.appendChild(title)
    console.log(fetchDocks())    
});