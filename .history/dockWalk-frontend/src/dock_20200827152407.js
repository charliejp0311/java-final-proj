class Dock {
    constructor (section){
        this.section = section;
    }
    
}

let dockCard = (sec,ranges)=> {
    let body = document.getElementById('dock')
    let div = document.createElement('div')
    div.id = 'dock-card'
    div.innerText = sec.attributes.section
    let ul = document.createElement('ul')
    for (const rng of ranges) {
        let li = document.createElement('li')
        li.innerText = rng.attributes.range
    }
    body.appendChild(div)
}


let displayDocks = (docks) => {
    let d = docks.data
    let r = docks.included
    for (const section of d) {
        let rngs = r.filter(rng=>rng.relationships.dock.data.id === section.id)
        dockCard(section,rngs)
        debugger;
    }
}

function fetchDocks() {
    return fetch('http://localhost:3000/docks')
    .then(resp => resp.json())
    .then(json=> displayDocks(json))
}