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
    debugger

    // for (const key in door) {
    //     let element = door[key];
    //     switch (key) {
    //         case 'stage':
    //             if (element === true) {
                    
    //                 li.innerText = 'Staging area'
    //                 ul.appendChild(li)
    //             }
    //             break;
    //         case 'inbound_available':
    //             if (element === true) {
    //                 li.innerText = 'Available for Inbound'
    //                 ul.appendChild(li)
    //             }
    //             break;
    //         case 'outbound_available':
    //             if (element === true) {
    //                 li.innerText = 'Available for Outbound'
    //                 ul.appendChild(li)
    //             }
    //             break;
    //         case 'inbound_present':
    //             if (element === true) {
    //                 li.innerText = 'Inbound'
    //                 ul.appendChild(li)
    //             }
    //             break;
    //         case 'outbound_present':
    //             if (element === true) {
    //                 li.innerText = 'Outbound'
    //                 ul.appendChild(li)
    //             }
    //             break;
    //         case 'serviceable':
    //             if (element === true) {
    //                 li.innerText = 'Serviceable'
    //                 ul.appendChild(li)
    //             } else {
    //                 li.innerText = 'DO NOT USE'
    //                 ul.appendChild(li)
    //             }
    //             break;
    //         case 'service_comments':
    //             li.innerText = element
    //             ul.appendChild(li)
    //             break;
    //     }
}