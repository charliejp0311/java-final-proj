
let dockCard = (sec,ranges)=> {
    let body = document.getElementById('dock')
    let div = document.createElement('div')
    div.className = 'card'
    div.id = sec.id
    div.addEventListener('click', (e)=>{
        if (e.target.className === 'card') {
            fetchDock(e.target.id)
        }
    })
    div.innerText = sec.attributes.section
    let ul = document.createElement('ul')
    ul.innerText = "Door Ranges"
    for (const rng of ranges) {
        let li = document.createElement('li')
        // li.addEventListener('click',rangeClick())
        li.innerText = rng.attributes.range
        ul.appendChild(li)
    }
    div.appendChild(ul)
    body.appendChild(div)
}


let displayDocks = (docks) => {
    let d = docks.data
    let r = docks.included
    for (const section of d) {
        let rngs = r.filter(rng=>rng.relationships.dock.data.id === section.id)
        dockCard(section,rngs)
    }
}

let fetchDocks = () => {
    return fetch('http://localhost:3000/docks')
    .then(resp => resp.json())
    .then(json=> displayDocks(json))
}

let fetchDock = (id) => {
    return fetch(`http://localhost:3000/docks/${id}`)
    .then(resp=>resp.json())
    .then(json=>displaySec(json))
}

let displaySec = (section)=>{
    dockCard(section.data.section,section.included)
}