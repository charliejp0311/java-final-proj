document.addEventListener("DOMContentLoaded", function () {
    let h = document.getElementsByTagName('header')[0]
    let button1 = document.createElement('button')
    button1.innerText = "Docks"
    button1.addEventListener('click',fetchDocks())
    h.appendChild(button1)
});