class Door extends Range {
    constructor(id,dock_id,dock_section, range, range_id, racks, number, stage, serviceable, s_comments, inbound_available, inbound_present, outbound_available, outbound_present) {
        super(dock_id, dock_section, range, range_id)
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
    h2.innerText = `${door.number}`
    let body = document.getElementById('dock')
    body.innerHTML = ""
    let div = document.createElement('div')
    div.className = 'card'
    div.innerText = door.number
    let frm = doorForm(door)
    div.appendChild(frm)
    body.appendChild(div)
    ///need to set checks here for anything that is true
    for (const key in door) {
        if (door.hasOwnProperty(key)) {
            const element = door[key];
            if (element === true) {
                document.querySelector(`#${key}`).checked = true
            }
        }
    }
}

let doorForm = (door) => {
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
                default :
                    if (element===true || element===false) {
                        lbl.innerText = key
                        checkBox.click()
                        checkBox.id = key
                        form.appendChild(lbl)
                        form.appendChild(checkBox)
                        form.innerHTML += '<br>'
                    }
                break;
            }
        }
        let submit = document.createElement('input')
        submit.type = 'submit'
        submit.addEventListener('click', (e)=>{
            let formElmnts = e.target.parentNode.children
            let disc = new Discovery(door.section, door.range, door.number, formElmnts.racks.checked, formElmnts.stage.checked, formElmnts.serviceable.checked, formElmnts.s_comments, formElmnts.inbound_available.checked, formElmnts.inbound_present.checked, formElmnts.outbound_available.checked, formElmnts.outbound_present.checked)
            let configObj = {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body: JSON.stringify(disc)
            }; 
            return fetch('http://localhost:3000/discoveries',configObj)
            // debugger
        })
        form.appendChild(submit)
        return form;
    }
}


let dispDr = (door) => {
    let div = document.createElement('div')
    div.className = 'door'
    div.innerText = door.number
    div.id = door.id
    div.innerHTML += '<br/>'
    // div.addEventListener('click', (e)=>{})
    let tbl = document.createElement('tbl')
    let tdk = document.createElement('td')
    let tde = document.createElement('td')
    for (const key in door) {
        if (door.hasOwnProperty(key)) {
            const element = door[key];
            let trk = document.createElement('tr')
            let tre = document.createElement('tr')
            if (element === true) {
                trk.innerText = `${key} ~`
                tre.innerText = `${element}`
                tdk.appendChild(trk)
                tde.appendChild(tre)
            }
            tbl.appendChild(tdk)
            tbl.appendChild(tde)
        }
    }
    div.appendChild(tbl)
    return div
}