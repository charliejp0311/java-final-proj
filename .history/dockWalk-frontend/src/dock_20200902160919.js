class Dock {
    constructor(id,section,ranges =[]) {
        this.id =id
        this.section = section;
        this.ranges = ranges;
    }
}

//making an empty array of docks/ranges/doors to store js dock obj's in thought is to get all the objects and store them in an array
const dks = [];
const ranges = [];
const drs = [];

let createDock = (docks) => {
    let d = docks.data // dock data
    let inc = docks.included /// included doors and ranges
    let rngs = inc.filter(rng => rng.type === 'door_range')//array of ranges json
    let ports = inc.filter(prt => prt.type === 'door')//array of doors json

    //docks
    for (const section of d) {
        dks.push(new Dock(section.id, section.attributes.section))//creates java object and pushes it to the dks array of docks
        let sectionsRanges = rngs.filter(rng => rng.relationships.dock.data.id === section.id)///filtering ranges that belong to this door

        //ranges
        for (const range of sectionsRanges) {
            ranges.push(new Range(
                section.attributes.section,
                range.attributes.range,
                range.attributes.racks
                ))//creating a range adding it to all ranges
            let prts = ports.filter(prt => prt.relationships.door_range.data.id === range.id)//identifying a doors in this range

            //doors
            for (const p of prts) {
                drs.push(new Door(
                p.attributes.id,
                section.attributes.section,
                range.attributes.range,
                p.attributes.racks,
                p.attributes.number,
                p.attributes.stage,
                p.attributes.serviceable,
                p.attributes.service_comments,
                p.attributes.inbound_available,
                p.attributes.inbound_present,
                p.attributes.outbound_available,
                p.attributes.outbound_present
                ))//creating door/port in this instance started getting confused LOL needed to change it 
                ranges[ranges['length']-1].doors.push(drs[drs.length - 1])///adding door to this ranges 'doors' array
            }//crates all doors

            dks[dks.length-1].ranges.push(ranges[ranges.length-1])//adding range to dock
        }/// creates all ranges

    }//creates all docks
    // displays the docks 
    for (const dock of dks) {
        dockCard(dock)
    }//sends all docks and their ranges to the dock card...... need to try new refactor

}

let dispDk = (dock)=>{
    let div = document.createElement('div')
    div.className = 'sectionCard'
    div.id = dock.id 
    for (const r of dock.ranges) {
        /// working here you are sending each docks range to create a range card
        div.appendChild(dispRng(r))        
    } 
    return div
}

let dockCard = (sec) => {
    
    let body = document.getElementById('dock')
    let div = document.createElement('div')
    div.className = 'card'
    div.id = sec.id
    div.addEventListener('click', (e) => {
        displaySec(dks.filter(dk=>dk.id === e.currentTarget.id)[0])
    })
    div.innerText = sec.section
    div.appendChild(dispDk(sec))
    body.appendChild(div)
}



let displaySec = (section) => {
    let h2 = document.getElementsByTagName('h2')[0]
    h2.innerText = `${section.section} - Door Ranges`
    let dock = document.getElementById('dock')
    dock.innerText = ""
    for (const rng of section.ranges) {
        let div = document.createElement('div')
        div.className = 'card'
        div.id = rng.id
        div.addEventListener('click',(e)=>{
            displayRange(ranges.filter(rng => rng.id === e.currentTarget.id)[0])
        })
        div.appendChild(dispRng(rng))
        dock.appendChild(div)
    }
}


let fetchDocks = () => {
    return fetch('http://localhost:3000/docks')
        .then(resp => resp.json())
        .then(json => createDock(json))
}