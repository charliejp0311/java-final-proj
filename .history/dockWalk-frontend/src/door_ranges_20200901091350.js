class Range extends Dock {
    constructor(dock, range, racks) {
        super(dock)
        this.range = range
        this.racks = racks
    }
}

let displayRange = (range) =>{
    let thisRange = ranges.filter(rng=>rng.range === range)
    let body = document.getElementById('dock')
    body.innerHTML = ""
    let trd = drs.filter(dr=>dr.range === range)
    for (const dr of trd) {
        let div = document.createElement('div')
        div.className = 'card'
        div.innerText = dr.number
        let drCard = doorCard(dr)
        div.appendChild(drCard)
        body.appendChild(div)
        // debugger;
    }
}