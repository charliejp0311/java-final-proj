class Dock {
    constructor (section){
        this.section = section;
    }
    
}

let dockCard = (sec)=> {
    let body = document.getElementById('dock')
    let div = document.createElement('div')
    div.id = 'dock-card'
    div.innerText = sec.attributes.section
    body.appendChild(div)
}

let displayDocks = (docks) => {
    let d = docks.data
    for (const section of d) {
        dockCard(section)
    }
}

function fetchDocks() {
    return fetch('http://localhost:3000/docks')
    .then(resp => resp.json())
    .then(json=> displayDocks(json))
}