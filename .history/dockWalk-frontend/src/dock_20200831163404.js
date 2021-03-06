class Dock {
    constructor(section) {
        this.section = section;
    }
}
let dockCard = (sec, ranges) => {
    let body = document.getElementById('dock')
    let div = document.createElement('div')
    div.className = 'card'
    div.id = sec.id
    div.addEventListener('click', (e) => {
        if (e.target.className === 'card') {
            // debugger;
            displaySec(dks[e.target.id - 1])
        }
    })
    div.innerText = sec.attributes.section
    let ul = document.createElement('ul')
    ul.innerText = "Door Ranges"
    for (const rng of ranges) {
        let li = document.createElement('li')
        // li.addEventListener('click',rangeClick())
        if (rng.range) {
            li.innerText = rng.range
        } else {
            li.innerText = rng.attributes.range
        }
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
    //docks
    for (const section of d) {
        dks.push(new Dock(section.attributes.section))
        let sectionsRanges = rngs.filter(rng => rng.relationships.dock.data.id === section.id)
        //ranges
        for (const range of sectionsRanges) {
            ranges.push(new Range(
                section.attributes.section,
                range.attributes.range,
                range.attributes.racks
            ))
            let prts = ports.filter(prt => prt.relationships.door_range.data.id === range.id)
            //doors
            for (const p of prts) {
                drs.push(new Door(
                    section.attributes.section,
                    range.attributes.range,
                    range.attributes.racks,
                    p.attributes.number,
                    p.attributes.stage,
                    p.attributes.serviceable,
                    p.attributes.service_comments
                ))
            }
        }
        let thisDocksRanges = ranges.filter(range => range.section === section.attributes.section)
        if (thisDocksRanges) {
            dockCard(section, thisDocksRanges)
        }
    }
}

let fetchDocks = () => {
    return fetch('http://localhost:3000/docks')
        .then(resp => resp.json())
        .then(json => displayDocks(json))
}

let fetchDock = (id) => {
    return fetch(`http://localhost:3000/docks/${id}`)
        .then(resp => resp.json())
        .then(json => displaySec(json))
}

let displaySec = (section) => {
    let body = document.getElementsByTagName('body')[0]
    body.innerHTML = `<h1>${section.section} - Door Ranges</h1>`
    let dock = document.getElementById('dock')
    let tsr = ranges.filter(rng=>rng.section===section.section)
    for (const rng of tsr) {
        let div = document.createElement('div')
        div.className = 'card'
        div.innerText = rng.range  
        let ul = document.createElement('ul')
        let trd = drs.filter(dr=>dr.range === rng.range)
        for (const dr of trd) {
            let li = document.createElement('li')
            li.innerText = `${dr.number} - serviceable ${dr.serviceable}`
            ul.appendChild(li)
        }
        div.appendChild(ul)
        dock.appendChild(div)
    }
}

