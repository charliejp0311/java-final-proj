document.addEventListener("DOMContentLoaded", function () {
    let h = document.getElementsByTagName('header')[0]
    let button1 = document.createElement('button')
    button1.innerText = "Docks"
    button1.addEventListener('click',fetchDocks())
    let button2 = document.createElement('button')
    // button2.addEventListener('click',fetchInbounds())
    button2.innerText = "Inbounds"
    let button3 = document.createElement('button')
    // button3.addEventListener('click',fetchOutbounds())
    button3.innerText = "Outbounds"
    h.appendChild(button1)
    h.appendChild(button2)
    h.appendChild(button3)
});
function refreshPage() {
    window.location.reload();
}