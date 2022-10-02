
let sgin_data={
    eml:"aayush07@gmail.com",
    pswd:"12345"
}
localStorage.setItem("lgin",JSON.stringify(sgin_data));
  

let login_data=JSON.parse(localStorage.getItem("lgin"));

let button=document.getElementById("codr");
button.addEventListener("click",fun);

let id=document.getElementById("userN");
let pd=document.getElementById("otp");


function fun(){
    if(login_data.eml===id.value   && login_data.pswd===otp.value){
        alert("successful login");
    }else{
        alert("invalid userId or password");
    }
}

