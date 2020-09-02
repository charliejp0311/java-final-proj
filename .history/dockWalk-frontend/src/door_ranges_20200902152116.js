class Range extends Dock {
    constructor(dock, range, doors = []) {
        super(dock)
        this.range = range
        this.doors = doors
    }
}

let displayRange = (range) =>{
    let h2 = document.getElementsByTagName('h2')[0]
    h2.innerText = `${range} `
    let body = document.getElementById('dock')
    body.innerHTML = ""
    let trd = drs.filter(dr=>dr.range === range)
    for (const dr of trd) {
        let div = document.createElement('div')
        div.className = 'card'
        div.appendChild(dispDr(dr))
        div.addEventListener("click", (e)=>{ displayDoor(dr)})
        body.appendChild(div)
    }
}

let dispRng = (range) =>{
    let div = document.createElement('div')
    div.className = "rangeCard"
    div.innerText = range.range
    for (const door of range.doors) {
        div.appendChild(dispDr(door))
    }
    return div

}