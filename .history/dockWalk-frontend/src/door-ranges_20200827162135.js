let displayDoorRanges = (ranges) => {
    debugger;
}

function fetchDoorRanges() {
    return fetch('http://localhost:3000/door_ranges')
        .then(resp => resp.json())
        .then(json => displayDocks(json))
}