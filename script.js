function checkPassword(){

    const password=document.getElementById("password").value;

    if(password==="2108"){

        document.querySelector(".paper").classList.add("fade-out");

        setTimeout(()=>{

            window.location.href="welcome.html";

        },1200);

    }

    else{

        document.getElementById("message").innerHTML="Wrong Password";

    }

}