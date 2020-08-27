class Dock {
    constructor (section){
        this.section = section;
    }
    
}

let dockCard = ()=> {
    
}

let displayDocks = (docks) => {
    let d = docks.data
    let r = docks.included
    let body = document.getElementsByTagName('body')[0]
    for (const section of d) {
        let div = document.createElement('div')
        div.id = 'dock-card'
        div.innerText = section.attributes.section
        let ul = document.createElement('ul')
        let docksRanges = r.map(rng=>{
            if (rng.relationships.dock.data.id === section.id) {
                return rng
            }
        })
        debugger;
        div.appendChild(ul)
        body.appendChild(div)
    }
    console.log(docks)
}

function fetchDocks() {
    return fetch('http://localhost:3000/docks')
    .then(resp => resp.json())
    .then(json=> displayDocks(json))
}