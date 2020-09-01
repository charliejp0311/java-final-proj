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
    let trd = drs.filter(dr=>dr.range === range)
    for (const dr of trd) {
        let div = document.createElement('div')
        div.className = 'card'
        div.innerText = dr.number
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        for (const key in dr) {
            if (dr.hasOwnProperty(key)) {
                let element = dr[key];
                switch (key) {
                    case value: 'stage'
                        if (element===true) {
                            li.innerText = 'Staging area'
                            ul.appendChild(li)
                        }
                        break;
                    case value: 'inbound_available'
                        if (element === true) {
                            li.innerText = 'Available for Inbound'
                            ul.appendChild(li)
                        }
                        break;
                    case value: 'outbound_available'
                        if (element === true) {
                            li.innerText = 'Available for Outbound'
                            ul.appendChild(li)
                        }
                        break;
                    case value: 'inbound_present'
                        if (element === true) {
                            li.innerText = 'Inbound'
                            ul.appendChild(li)
                        }
                        break;
                    case value: 'outbound_present'
                        if (element === true) {
                            li.innerText = 'Outbound'
                            ul.appendChild(li)
                        }
                        break;
                    case value: 'serviceable'
                        if (element === true) {
                            li.innerText = 'Serviceable'
                            ul.appendChild(li)
                        } else{
                            li.innerText = 'DO NOT USE'
                            ul.appendChild(li)
                        }
                        break;
                    case value: 'service_comments'
                            li.innerText = element
                            ul.appendChild(li)
                        break;
                }
            }
        }
        div.appendChild(ul)
        body.appendChild(div)
        // debugger;
    }
}