class Range extends Dock {
    constructor(dock, range, racks) {
        super(dock)
        this.range = range
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
        for (const key in dr) {
            let p = document.createElement('p')
            if (dr.hasOwnProperty(key)) {
                const element = dr[key];
                p.innerText = `${key} ~ ${element}`
            }
            div.appendChild(p)
        }
        // div.appendChild(drCard)
        body.appendChild(div)
        // debugger;
    }
}