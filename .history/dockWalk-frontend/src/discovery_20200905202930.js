class Discovery {
    constructor(dock, range, door, racks, stage, serviceable, s_comments, inbound_available, inbound_present, outbound_available, outbound_present, id = null) {
        this.id = id
        this.dock = dock
        this.range = range
        this.door = door
        this.racks = racks
        this.stage = stage
        this.serviceable =serviceable 
        this.s_comments = s_comments
        this.inbound_available = inbound_available
        this.inbound_present = inbound_present
        this.outbound_available = outbound_available
        this.outbound_present = outbound_present
    }

}

let showDiscs = (discs)=>{
    let ds = discs.data
    let dock = document.getElementById('dock')
    dock.innerText = ""
    //list of attributes each discovery has
    let attrs = []
    for (const k in ds[0].attributes) {
        if (ds[0].attributes.hasOwnProperty(k)) {
            const element = ds[0].attributes[k];
            attrs.push(k)
        }
    }
    let tbl = document.createElement('table')
    let tr = document.createElement('tr')
    for (const a of attrs) {
        if (a !== 'id'){
            let th = document.createElement('th')
            th.innerText = a 
            tr.appendChild(th)
        }
    }
    tr.innerHTML += `<th>Delete</th>`
    tbl.appendChild(tr)

    for (const k in ds) {
        let tr = document.createElement('tr')
        if (ds.hasOwnProperty(k)) {
            const disc = ds[k];
            for (const a of attrs) {
                let td = document.createElement('td')
                switch (a) {
                    case 'id':
                        break;
                    case 'dock_id':
                        let dock = dks.filter(dock => dock.id === disc.attributes[a].toString())[0]
                        td.innerText = dock.section 
                        tr.appendChild(td)
                        break;
                    case 'door_range_id':
                        let range = ranges.filter(rng => rng.id === disc.attributes[a].toString())[0]
                        td.innerText = range.range
                        tr.appendChild(td)
                        break;
                    case 'door_id':
                        let door = drs.filter(door => door.id === disc.attributes[a])[0]
                        td.innerText = door.number
                        tr.appendChild(td)
                        break;
                    default:
                        td.innerText = disc.attributes[a]
                        tr.appendChild(td)
                        break;
                }
            }
            let but = document.createElement('button')
            let td = document.createElement('td')
            but.innerText = 'Delete'
            but.id = disc.id
            but.addEventListener('click',(e)=>{
                let id = e.target.id
                let configObj = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                };
                // document.querySelector(`#${id}`).remove
                return fetch(`http://localhost:3000/discoveries/${id}`, configObj).then(resp => resp.json()).then(json => showDiscs(json))
            })
            td.appendChild(but)
            tr.appendChild(td)
            tr.id = but.id 
        }
        tbl.appendChild(tr)
    }
    
    dock.appendChild(tbl)

}

let fetchDiscs = ()=>{
    return fetch('http://localhost:3000/discoveries').then(resp=>resp.json()).then(json=>showDiscs(json))
}