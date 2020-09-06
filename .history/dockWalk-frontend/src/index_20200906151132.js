document.addEventListener("DOMContentLoaded", function () {
    let dock = document.getElementById('dock')
    let h = document.getElementsByTagName('header')[0]
    fetchDocks();
    let button1 = document.createElement('button')
    button1.innerText = "Docks"
    button1.addEventListener('click', (e)=>{window.location.reload()})
    let button2 = document.createElement('button')
    button2.addEventListener('click',(e)=>{
        dispDrCards(doorWithIn(), "Inbounds")
    })
    button2.innerText = "Inbounds"
    let button3 = document.createElement('button')
    button3.addEventListener('click',(e)=>{
        dispDrCards(doorWithOut(), "Outbounds")
    })
    button3.innerText = "Outbounds"
    let button4 = document.createElement('button')
    button4.addEventListener('click',(e)=>{
        fetchDiscs()
    })
    button4.innerText = "Discoveries"
    let button5 = document.createElement('button')
    button5.addEventListener('click',(e)=>{
        return fetch('http://localhost:3000/clear').then(resp=>resp.json()).then(dock.innerHTML = "")
    })
    button5.innerText = "Clear Dock"
    h.appendChild(button1)
    h.appendChild(button2)
    h.appendChild(button3)
    h.appendChild(button4)
    h.appendChild(button5)
});
