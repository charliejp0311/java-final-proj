class Door extends Range {
    constructor(dock, range, racks, number, stage, serviceable, s_comments, inbound_available, inbound_present, outbound_available, outbound_present) {
        super(dock, range, racks)
        this.number = number
        this.stage = stage
        this.serviceable = serviceable
        this.s_comments = s_comments
        this.inbound_present = inbound_present 
        this.inbound_available = inbound_available 
        this.outbound_present = outbound_present 
        this.outbound_available  = outbound_available         
    }
}

let doorCard = (door) => {
    let form = document.createElement('form')
    form.id = door.id
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    let lbl = document.createElement('label')
    for (const key in door) {
        if (door.hasOwnProperty(key)) {
            const element = door[key];
            debugger;
        }
    }


}