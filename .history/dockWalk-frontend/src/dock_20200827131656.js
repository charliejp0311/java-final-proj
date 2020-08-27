class Dock {
    constructor (section){
        this.section = section;
    }
    
    
    
    
}

let displayDocks = (docks) => {
    debugger;
    console.log(docks)
}

let fetchDocks = () => {
    return fetch('http://localhost:3000/docks')
    .then(resp => resp.json())
    .then(json=> displayDocks(json))
}