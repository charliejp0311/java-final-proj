document.addEventListener("DOMContentLoaded", function () {
    let h = document.getElementsByTagName('header')[0]
    let button1 = document.createElement('button')
    button1.innerText = "Docks"
    button1.addEventListener('click', fetchDocks())
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

let dockCard = (sec, ranges) => {
    let body = document.getElementById('dock')
    let div = document.createElement('div')
    div.className = 'card'
    div.id = sec.id
    div.addEventListener('click', (e) => {
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

//making an empty array of docks to store js dock obj's in thought is to get all the objects and store them in an array
const dks = [];
//playing to see what the data looks like
const ranges = [];
///playing more
const drs = [];

let displayDocks = (docks) => {
    let d = docks.data
    let inc = docks.included
    let rngs = inc.filter(rng => rng.type === 'door_range')
    let ports = inc.filter(prt => prt.type === 'door')
    
    for (const section of d) {
        dks.push(new Dock(section.attributes.section))
        let sectionsRanges = rngs.filter(rng=>rng.relationships.dock.data.id===section.id)
        for (const range of sectionsRanges) {
            ranges.push(new Range(
                section.attributes.section,
                range.attributes.range,
                range.attributes.racks
                )
            )
            let prts = ports.filter(prt=>prt.relationships.door_range.data.id===range.id)
            for (const p of prts) {
                drs.push(new Door(
                    section.attributes.section,
                    range.attributes.range,
                    range.attributes.racks,
                    p.attributes.number,
                    p.attributes.stage,
                    p.attributes.serviceable,
                    p.attributes.service_comments
                    )
                )
            }
        }
        // dockCard(section, rngs)
    }
    debugger;
}

let fetchDocks = () => {
    return fetch('http://localhost:3000/doors')
        .then(resp => resp.json())
        .then(json => displayDocks(json))
}

let fetchDock = (id) => {
    return fetch(`http://localhost:3000/docks/${id}`)
        .then(resp => resp.json())
        .then(json => displaySec(json))
}

let displaySec = (section) => {
    let dock = document.getElementById('dock')
    dock.innerHTML = "";
    dockCard(section.data, section.included)
}

class Dock {
    constructor (section){
        this.section = section;
    }
}

class Range extends Dock {
    constructor (dock,range,racks){
        super(dock)
        this.range = range
        this.racks = racks
    }
}

class Door extends Range {
    constructor (dock, range, racks, number,stage,serviceable,s_comments){
        super(dock, range,racks)
        this.number = number
        this.stage = stage
        this.serviceable = serviceable
        this.s_comments = s_comments
    }
}