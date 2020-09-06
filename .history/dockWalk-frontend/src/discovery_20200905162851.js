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
    let td = document.createElement('td')
    for (const a of attrs) {
        let th = document.createElement('th')
        th.innerText = a 
        td.appendChild(th)
    }
    tbl.appendChild(td)

    for (const k in ds) {
        let td = document.createElement('td')
        if (ds.hasOwnProperty(k)) {
            const disc = ds[k];
            for (const a of attrs) {
                let tr = document.createElement('tr')
                tr.innerText = disc.attributes[a]
                td.appendChild(tr)
            }
        }
        tbl.appendChild(td)
    }
    
    dock.appendChild(tbl)

}

let fetchDiscs = ()=>{
    return fetch('http://localhost:3000/discoveries').then(resp=>resp.json()).then(json=>showDiscs(json))
}