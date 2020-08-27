class Dock {
    constructor (section){
        this.section = section;
    }
    
    displayDocks(docks){
        debugger;
        console.log(docks)
    }

    fetchDocks() {
        return fetch('http://localhost:3000/docks')
        .then(resp => resp.json())
        .then(json=> displayDocks(json))
    }

    
}
