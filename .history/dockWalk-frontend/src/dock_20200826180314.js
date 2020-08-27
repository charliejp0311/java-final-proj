class Dock {
    constructor (section){
        this.section = section;
    }

    async fetchDocks() {
        const resp = await fetch('http: //localhost:3000/docks');
        const json = await resp.json();
        return displayDocks(json);
    }

    displayDocks(docks){
        debugger;
    }

    
}
