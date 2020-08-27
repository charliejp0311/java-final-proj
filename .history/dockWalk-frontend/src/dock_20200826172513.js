class Dock {
    constructor (section){
        this.section = section;
    }

    
}

const docks = fetch('http://localhost:3000/docks').then(resp => resp.json()).then(json=>{return json})
for (const section in docks) {
    if (docks.hasOwnProperty(section)) {
        const dock = docks[section];
        console.log(dock.section)
    }
}