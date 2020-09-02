class User{
    constructor(name,password,user_type){
        this.name = name
        this.password = password
        this.user_type = user_type
    }
}


let submitData = (name, email) => {
    let formData = {
        name: name,
        email: email
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