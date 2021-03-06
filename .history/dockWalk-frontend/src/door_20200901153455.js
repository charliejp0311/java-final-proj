class Door extends Range {
    constructor(id, dock, range, racks, number, stage, serviceable, s_comments, inbound_available, inbound_present, outbound_available, outbound_present) {
        super(dock, range)
        this.id = id
        this.number = number
        this.racks = racks
        this.stage = stage
        this.serviceable = serviceable
        this.s_comments = s_comments
        this.inbound_present = inbound_present 
        this.inbound_available = inbound_available 
        this.outbound_present = outbound_present 
        this.outbound_available  = outbound_available         
    }
}

let displayDoor = (door)=>{
    let h2 = document.getElementsByTagName('h2')[0]
    h2.innerText = `${door.number} ~ ${door.range} ~ ${door.section}`
    let body = document.getElementById('dock')
    body.innerHTML = ""
    let div = document.createElement('div')
    div.className = 'card'
    div.innerText = door.number
    let frm = doorCard(door)
    div.appendChild(frm)
    body.appendChild(div)
}

let doorCard = (door) => {
    if (door.serviceable) {
        let form = document.createElement('form')
        let comments = document.createElement('input')
        comments.type = "text"
        form.htmlFor = door
        form.id = door.id
        for (const key in door) {
            const element = door[key];
            let checkBox = document.createElement('input')
            checkBox.type = 'checkbox'
            let lbl = document.createElement('label')
            switch (key) {
                case 'section':
                    // lbl.innerText = `${element}`
                    // form.appendChild(lbl)
                    // form.innerHTML += '<br>'
                    break;
                case 'range':
                    // lbl.innerText = `${element}`
                    // form.appendChild(lbl)
                    // form.innerHTML += '<br>'
                    break;
                case 's_comments':
                    if (element !== '' ) {
                        lbl.innerText = `${element}`
                        form.appendChild(lbl)
                        form.innerHTML += '<br>'
                    } else if(door.serviceable === false){
                        lbl.innerText = `${key} ~`
                        form.appendChild(lbl)
                        form.innerHTML += '<br>'
                        let comments = document.createElement('input')
                        comments.type = 'text'
                        form.appendChild(comments)
                        form.innerHTML += '<br>'
                    }
                break;
                case 'id':

                break;
                default :
                    lbl.innerText = key
                    if (element===true) {
                        checkBox.checked = element
                        checkBox.click()
                    }
                    checkBox.id = key
                    form.appendChild(lbl)
                    form.appendChild(checkBox)
                    // if (element === true){
                    //     debugger
                    // }
                    form.innerHTML += '<br>'
                break;
            }
        }
        let submit = document.createElement('input')
        submit.type = 'submit'
        submit.addEventListener('click', (e)=>{
            // debugger;
        })
        form.appendChild(submit)
        return form;
    }
}