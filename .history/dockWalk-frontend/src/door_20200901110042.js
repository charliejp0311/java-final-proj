class Door extends Range {
    constructor(id, dock, range, racks, number, stage, serviceable, s_comments, inbound_available, inbound_present, outbound_available, outbound_present) {
        super(dock, range, racks)
        this.id = id
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
    let br = document.createElement('br')
    form.id = door.id
    for (const key in door) {
        if (door.hasOwnProperty(key)) {
            const element = door[key];
            let checkBox = document.createElement('input')
            checkBox.type = 'checkbox'
            let lbl = document.createElement('label')
            if (key === 'section' || key === 'range' || key === 'racks') {
                lbl.innerText = `${key} ~ ${element}`
                form.appendChild(lbl)
                form.innerHTML += '<br>'
            } else {
                lbl.innerText = key 
                checkBox.value = element
                checkBox.id = key
                form.appendChild(lbl)
                form.appendChild(checkBox)
                form.innerHTML += '<br>'
            }
        }
    }
    let submit = document.createElement('submit')
    submit.id = form.id
    form.appendChild(submit)
    return form;

}