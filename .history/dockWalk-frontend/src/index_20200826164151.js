document.addEventListener('DOMContentLoaded',(e)=>{
    console.log("The DOM has loaded");
    let body = document.getElementsByTagName('body')[0]
    body.innerText = "testing..."
})