class Range extends Dock {
    constructor(dock, range) {
        super(dock)
        this.range = range
    }
}

let displayRange = (range) =>{
    let h2 = document.getElementsByTagName('h2')[0]
    h2.innerText = `${range.range} - ${range.section}`
    let body = document.getElementById('dock')
    body.innerHTML = ""
    let trd = drs.filter(dr=>dr.range === range)
    for (const dr of trd) {
        let div = document.createElement('div')
        div.className = 'card'
        div.innerText = dr.number
        for (const key in dr) {
            let p = document.createElement('p')
            let element = dr[key];
            switch (key) {
                case "id":
                    break;
                case "number":
                    break;
                case 's_comments':
                    if (!dr.serviceable) {
                        p.innerText = `${key} ~ ${element}`
                        div.appendChild(p)
                    }
                    break;
                default:
                    p.innerText = `${key} ~ ${element}`
                    div.appendChild(p)
                    break;
            }
            
        }
        div.addEventListener("click", (e)=>{ displayDoor(dr)})
        body.appendChild(div)
    }
}