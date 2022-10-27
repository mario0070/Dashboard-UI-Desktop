// change navbar background color on scroll

window.addEventListener("scroll",reveals)

function reveals(){
    var reveals=document.querySelectorAll(".reveal")
    var nav=document.getElementById("nav")
  
    for (var i = 0 ; i < reveals.length ;i++){
        var windowh=window.innerHeight;
        var revealt=reveals[i].getBoundingClientRect().top;
        var revealp=10;
  
        if(revealt < windowh - revealp){
            nav.classList.add("valid")
        
        }
        else{
            nav.classList.remove("valid")
        }
    }
  }


  
//   Change Profile Pic
var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    var image2 = document.getElementById("output2");
    image2.src = URL.createObjectURL(event.target.files[0]);
};




//   slide user profile details
var headerCont2=document.getElementById("headerCont2")
var headerCont3=document.getElementById("headerCont3")
var absolute=document.getElementById("absolute")

headerCont2.addEventListener("click",()=>{
    absolute.classList.add("valid2")
    absolute.classList.remove("valid1")
    absolute.classList.remove("valid3")
})

headerCont3.addEventListener("click",()=>{
    absolute.classList.add("valid3")
    absolute.classList.remove("valid2")
    absolute.classList.remove("valid1")
})


$("#headerCont3").click(()=>{
    $("#profileCont").load("/profile/edit.html")
})
  

$("#headerCont2").click(()=>{
    $("#profileCont").load("/profile/message.html")
})
  