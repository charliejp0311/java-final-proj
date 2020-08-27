let displayDoorRanges = (ranges) => {
    let r = ranges.data
    let body = document.getElementsByTagName('body')[0]
    let ul = document.createElement('ul')
    for (const section of d) {
        let li = document.createElement('li')
        li.id = 'dock-card'
        li.innerText = section.attributes.section
        ul.appendChild(li)
    }
    body.appendChild(ul)
    console.log(docks)
}

function fetchDoorRanges() {
    return fetch('http://localhost:3000/door_ranges')
        .then(resp => resp.json())
        .then(json => displayDocks(json))
}