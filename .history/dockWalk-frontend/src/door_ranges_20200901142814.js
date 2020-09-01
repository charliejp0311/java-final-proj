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
            let element = dr[key];
            switch (key) {
                case "id":
                    
                    break;
            
                case "number":
                    
                    break;
            
                case 's_comments':
                    if (!door.serviceable) {
                        p.innerText = `${key} ~ ${element}`
                        div.appendChild(p)
                    }
                    break;
            
                case value:
                    
                    break;
            
                case value:
                    
                    break;
            
                default:
                    p.innerText = `${key} ~ ${element}`
                    div.appendChild(p)
                    break;
            }
            
        }
        // div.appendChild(drCard)
        body.appendChild(div)
        // debugger;
    }
}