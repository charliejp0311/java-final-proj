class User{
    constructor(name,password,user_type){
        this.name = name
        this.password = password
        this.user_type = user_type
    }
}

let displayLogin = () =>{
    let head = document.getElementsByTagName('header')[0]
    let frm = document.createElement('form')
    let name = document.createElement('input')
    let pass = document.createElement('input')
    let submit = document.createElement('input')
    name.type = 'text'
    name.id = 'Name'
    frm.appendChild(name)
    // frm.innerHTML += '<br>'
    pass.type = 'password'
    pass.id = 'Password'
    frm.appendChild(pass)
    // frm.innerHTML += '<br>'
    submit.type = 'submit'
    submit.addEventListener('click',(e)=>{
        let data = e.target.parentNode.children
        submitData(data.name,data.password)
    })
    frm.appendChild(submit)
    head.appendChild(frm)

}

let submitData = (name, password) => {
    let formData = {
        name: name,
        password: password
    }
    let configObj = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };


    return fetch('http://localhost:3000/users', configObj)
        .then(resp => resp.json())
        .then(json => {
            document.body.append(json.id);
        })
        .catch(function (error) {
            if (error.code = '401') {
                document.body.append('Unauthorized Access')
                alert('Unauthorized Access');
            }
        });

};