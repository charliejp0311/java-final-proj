class Dock {
    constructor (section){
        this.section = section;
    }

    
}

const docks = fetch('http://localhost:3000/docks').then(resp => resp.json()).then(json=>{return json})