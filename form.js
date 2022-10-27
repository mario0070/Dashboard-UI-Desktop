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