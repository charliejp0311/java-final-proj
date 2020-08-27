class Dock {
    constructor (section){
        this.section = section;
    }

    fetchDocks = function () {
        return fetch('http: //localhost:3000/docks')
        .then(resp => resp.json())
        .then(json=> displayDocks(json))
    }

    displayDocks(docks){
        debugger;
    }

    
}
