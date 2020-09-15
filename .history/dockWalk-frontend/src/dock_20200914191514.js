class Dock {
    constructor(id,section,ranges =[]) {
        this.id =id
        this.section = section
        this.ranges = ranges
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
        //ranges
        for (const range of rngs.filter(rng => rng.relationships.dock.data.id === section.id)) {
            ranges.push(new Range(
                section.id,
                section.attributes.id,
                range.attributes.range,
                range.id,
                range.attributes.racks
                ))//creating a range adding it to all ranges
            // debugger
            //doors
            for (const p of ports.filter(prt => prt.relationships.door_range.data.id === range.id)) {
                drs.push(new Door(
                    p.attributes.id,
                    section.id,
                    section.attributes.section,
                    range.attributes.range,
                    range.id,
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
    displayDocks(dks) 
}

let displayDocks = (docks)=>{
    
    for (const dock of docks) {
        dockCards(dock)
    }//sends all docks and their ranges to the dock card.
}
// gives the dock a section card might put the event listener here...... 
let dispDk = (dock)=>{
    let div = document.createElement('div')
    div.className = 'section'
    div.innerText = dock.section
    div.id = dock.id
    div.addEventListener('click', (e) => {
        displaySec(dks.filter(dk => dk.id === e.currentTarget.id)[0])
    })
    for (const r of dock.ranges) {
        /// working here you are sending each docks range to create a range card
        div.appendChild(dispRng(r))        
    } 
    return div
}

//grabs the main grid and adds cards
let dockCards = (dock) => {
    let body = document.getElementById('dock')
    let div = document.createElement('div')
    div.className = 'card'
    div.appendChild(dispDk(dock))
    body.appendChild(div)
}

///this is the individual dock section

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


let searchBar = () => {
    let inputBox = document.createElement('input')
    inputBox.type = 'text'
    inputBox.addEventListener('keyup',(e)=>{
        // I want to search all docks for there sections and parse the section title from them here
        let dock = document.getElementById('dock')
        dock.innerHTML = ""
        let filteredDocks
        filteredDocks = dks.filter(section => findSec(section, e.target.value))
        if (e.target.value.length > 1) {
            debugger
        }
        displayDocks(filteredDocks)
    })

    return inputBox
}

let findSec = (section, inVal) =>{
    let sec = section.section.split('')
    if (sec.slice(0, inVal.length)[0].toLowerCase() === inVal.toLowerCase()){
        // if (inVal.length > 1) {
        //     debugger
        // }
        return section
    }
    // debugger
    // for (let i = 0; i < searchVal.length; i++) {
    //     const v = searchVal[i];
    //     //test all letters given
    //     if (sec.slice(0, i + 1).join('').toLowerCase() === searchVal.slice(0, i + 1).join('').toLowerCase()) {
    //         return section
    //     } 
       
    // }
}

let fetchDocks = () => {
    return fetch('http://localhost:3000/docks')
        .then(resp => resp.json())
        .then(json => createDock(json))
}