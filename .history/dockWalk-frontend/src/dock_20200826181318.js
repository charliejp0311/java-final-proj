class Dock {
    constructor (section){
        this.section = section;
    }
    
    displayDocks(){
        debugger;
    }

    fetchDocks() {
        return fetch('http://localhost:3000/docks')
        .then(resp => resp.json())
        .then(json=> displayDocks(json))
    }

    
}
