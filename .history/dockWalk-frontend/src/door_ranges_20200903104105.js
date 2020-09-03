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
    div.addEventListener('click', (e) => {
        displaySec(ranges.filter(rng => rng.id === e.currentTarget.id)[0])
    })
    for (const door of range.doors) {
        div.appendChild(dispDr(door))
    }
    return div

}