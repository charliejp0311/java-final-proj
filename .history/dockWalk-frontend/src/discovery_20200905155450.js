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
    let d = discs.data
    debugger
}

let fetchDiscs = ()=>{
    return fetch('http://localhost:3000/discoveries').then(resp=>resp.json()).then(json=>showDiscs(json))
}