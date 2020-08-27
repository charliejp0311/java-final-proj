class Dock {
    constructor (section){
        this.section = section;
    }
    
}

let dockCard = (sec)=> {
    let div = document.createElement('div')
    div.id = 'dock-card'
    div.innerText = sec.attributes.section
    body.appendChild(div)

}

let displayDocks = (docks) => {
    let d = docks.data
    let r = docks.included
    let body = document.getElementById('dock')
    for (const section of d) {
        dockCard(section)
        // let ul = document.createElement('ul')
        // let docksRanges = r.map(rng=>{
        //     if (rng.relationships.dock.data.id === section.id) {
        //         return rng
        //     }
        // })
        debugger;
        // div.appendChild(ul)
    }
    console.log(docks)
}

function fetchDocks() {
    return fetch('http://localhost:3000/docks')
    .then(resp => resp.json())
    .then(json=> displayDocks(json))
}