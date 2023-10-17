var but=document.querySelector(".bu")

var logo1= document.querySelectorAll(".logo")

var haha = document.querySelector(".yu")
var pi = document.querySelectorAll(".pi")
but.addEventListener("click",()=>{
 logo1.forEach(element => 
    element.classList.toggle("acti"))

    haha.classList.toggle("acti")
    but.classList.toggle("acti")
    
    pi.forEach(ele => 
        ele.classList.toggle("acti")
    );
     })

