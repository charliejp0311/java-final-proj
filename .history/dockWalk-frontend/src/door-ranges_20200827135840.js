let displayDocks = (ranges) => {
    let r = ranges.data
    let body = document.getElementsByTagName('body')[0]
    for (const section of d) {
        let div = document.createElement('div')
        div.id = 'dock-card'
        div.innerText = section.attributes.section
        body.appendChild(div)
    }
    console.log(docks)
}

function fetchDocks() {
    return fetch('http://localhost:3000/docks')
        .then(resp => resp.json())
        .then(json => displayDocks(json))
}