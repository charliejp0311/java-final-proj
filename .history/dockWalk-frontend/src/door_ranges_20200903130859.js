class Range extends Dock {
    constructor(dock_id, dock_section, range, id, doors = []) {
        super(dock_id,dock_section)
        this.range = range
        this.id = id
        this.doors = doors
    }
}

let displayRange = (range) =>{
    let h2 = document.getElementsByTagName('h2')[0]
    h2.innerText = `${range.range} `
    let body = document.getElementById('dock')
    body.innerHTML = ""
    for (const dr of range.doors) {
        let div = document.createElement('div')
        div.className = 'card'
        div.appendChild(dispDr(dr))
        div.addEventListener("click", (e)=>{ displayDoor(dr)})
        body.appendChild(div)
    }
}

let dispRng = (range) =>{
    let div = document.createElement('div')
    div.className = "range"
    div.id = range.id
    div.innerText = range.range
    for (const door of range.doors) {
        if (door.stage === true || door.racks === true || door.inbound_present === true || door.inbound_available === true || door.outbound_present === true || door.outbound_available === true) {
            div.appendChild(dispDr(door))
        }
    }
    return div

}

let doorWithOut = () =>{
    return drs.filter(door=>door.outbound_present===true || door.outbound_available===true)
}

let doorWithIn = () => {
    return drs.filter(door => door.inbound_present === true || door.inbound_available === true)
}

let doorWithRack = () =>{
    return drs.filter(door => door.racks === true)

}