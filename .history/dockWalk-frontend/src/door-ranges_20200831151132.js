class Range extends Dock {
    constructor(dock, range, racks) {
        super(dock)
        this.range = range
        this.racks = racks
    }
}
let displayDoorRanges = (ranges) => {
    debugger;
}

function fetchDoorRanges() {
    return fetch('http://localhost:3000/door_ranges')
        .then(resp => resp.json())
        .then(json => displayDocks(json))
}