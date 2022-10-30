
// Show Background image selection 
var wheelBtn=document.getElementById("wheelBtn")
var wheel=document.getElementById("wheel")

wheelBtn.addEventListener("click",()=>{
    wheel.classList.toggle("valid")
    wheelBtn.classList.toggle("valid")
})

var mainContent=document.getElementById("mainCont")
mainContent.addEventListener("click",()=>{
  wheel.classList.remove("valid")
  wheelBtn.classList.remove("valid")
})


// cookies option
var cookies=document.getElementById("cookies")
var decline=document.getElementById("decline")
var accept=document.getElementById("accept")
decline.addEventListener("click",()=>{
  cookies.classList.remove("valid")
})

accept.addEventListener("click",()=>{
  cookies.classList.remove("valid")
})


window.addEventListener("load",()=>{
  setTimeout(()=>{
    cookies.classList.add("valid")
  },10000)
})



// Change navabr color on scroll
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


  
// Hide bottom bar
window.addEventListener("scroll",revealSidebar)
  function revealSidebar(){
    var sidebar = document.getElementById("sidebar")
    var reveals=document.querySelectorAll(".revealBar")
    for (var i = 0 ; i < reveals.length ;i++){
        var windowh=window.innerHeight;
        var revealt=reveals[i].getBoundingClientRect().top;
        var revealp=10;
  
        if(revealt < windowh - revealp){
            sidebar.classList.add("valid")
        
        }
        else{
            sidebar.classList.remove("valid")
        }
    }
  }


//   change background image 
  var bg1=document.getElementById("bg1")
  var bg2=document.getElementById("bg2")
  var bg3=document.getElementById("bg3")
  var bg4=document.getElementById("bg4")
  var bg5=document.getElementById("bg5")
  var bg6=document.getElementById("bg6")
  var bg7=document.getElementById("bg7")
  var bg8=document.getElementById("bg8")
  var bg9=document.getElementById("bg9")
  var bg10=document.getElementById("bg10")
  var body=document.getElementById("body")

  bg1.addEventListener("click",()=>{
    body.classList.toggle("bg1")
    body.classList.remove("bg2")
    body.classList.remove("bg3")
    body.classList.remove("bg4")
    body.classList.remove("bg5")
    body.classList.remove("bg6")
    body.classList.remove("bg7")
    body.classList.remove("bg8")
    body.classList.remove("bg9")
    body.classList.remove("bg10")
  })

  bg2.addEventListener("click",()=>{
    body.classList.toggle("bg2")
    body.classList.remove("bg1")
    body.classList.remove("bg3")
    body.classList.remove("bg4")
    body.classList.remove("bg5")
    body.classList.remove("bg6")
    body.classList.remove("bg7")
    body.classList.remove("bg8")
    body.classList.remove("bg9")
    body.classList.remove("bg10")
  })

  bg3.addEventListener("click",()=>{
    body.classList.toggle("bg3")
    body.classList.remove("bg1")
    body.classList.remove("bg2")
    body.classList.remove("bg4")
    body.classList.remove("bg5")
    body.classList.remove("bg6")
    body.classList.remove("bg7")
    body.classList.remove("bg8")
    body.classList.remove("bg9")
    body.classList.remove("bg10")
  })

  bg4.addEventListener("click",()=>{
    body.classList.toggle("bg4")
    body.classList.remove("bg1")
    body.classList.remove("bg2")
    body.classList.remove("bg3")
    body.classList.remove("bg5")
    body.classList.remove("bg6")
    body.classList.remove("bg7")
    body.classList.remove("bg8")
    body.classList.remove("bg9")
    body.classList.remove("bg10")
  })

  bg5.addEventListener("click",()=>{
    body.classList.toggle("bg5")
    body.classList.remove("bg1")
    body.classList.remove("bg2")
    body.classList.remove("bg3")
    body.classList.remove("bg4")
    body.classList.remove("bg6")
    body.classList.remove("bg7")
    body.classList.remove("bg8")
    body.classList.remove("bg9")
    body.classList.remove("bg10")
  })

  bg6.addEventListener("click",()=>{
    body.classList.toggle("bg6")
    body.classList.remove("bg2")
    body.classList.remove("bg3")
    body.classList.remove("bg4")
    body.classList.remove("bg5")
    body.classList.remove("bg1")
    body.classList.remove("bg7")
    body.classList.remove("bg8")
    body.classList.remove("bg9")
    body.classList.remove("bg10")
  })

  bg7.addEventListener("click",()=>{
    body.classList.toggle("bg7")
    body.classList.remove("bg6")
    body.classList.remove("bg2")
    body.classList.remove("bg3")
    body.classList.remove("bg4")
    body.classList.remove("bg5")
    body.classList.remove("bg1")
    body.classList.remove("bg10")
    body.classList.remove("bg8")
    body.classList.remove("bg9")
  })

  bg8.addEventListener("click",()=>{
    body.classList.toggle("bg8")
    body.classList.remove("bg6")
    body.classList.remove("bg2")
    body.classList.remove("bg3")
    body.classList.remove("bg4")
    body.classList.remove("bg5")
    body.classList.remove("bg1")
    body.classList.remove("bg7")
    body.classList.remove("bg10")
    body.classList.remove("bg9")
  })

  bg9.addEventListener("click",()=>{
    body.classList.toggle("bg9")
    body.classList.remove("bg6")
    body.classList.remove("bg2")
    body.classList.remove("bg3")
    body.classList.remove("bg4")
    body.classList.remove("bg5")
    body.classList.remove("bg1")
    body.classList.remove("bg7")
    body.classList.remove("bg8")
    body.classList.remove("bg10")
  })

  bg10.addEventListener("click",()=>{
    body.classList.toggle("bg10")
    body.classList.remove("bg7")
    body.classList.remove("bg8")
    body.classList.remove("bg9")
    body.classList.remove("bg6")
    body.classList.remove("bg2")
    body.classList.remove("bg3")
    body.classList.remove("bg4")
    body.classList.remove("bg5")
    body.classList.remove("bg1")
  })


//   side bar inputs
var board=document.getElementById("board")
var icon=document.getElementById("icon")
var form=document.getElementById("form")
var calender=document.getElementById("calender")
var table=document.getElementById("table")
var profile=document.getElementById("profile")
var login=document.getElementById("login")
var register=document.getElementById("register")
var abs=document.getElementById("abs")
board.addEventListener("click",()=>{
    board.classList.add("valid")
    document.getElementById("mainCont").classList.add("valid")
    profile.classList.remove("valid")
    login.classList.remove("valid")
    calender.classList.remove("valid")
    register.classList.remove("valid")
    icon.classList.remove("valid")
    table.classList.remove("valid")
    form.classList.remove("valid")
    abs.classList.add("valid")
    abs.classList.remove("valid1")
    abs.classList.remove("valid2")
    abs.classList.remove("valid3")

})
icon.addEventListener("click",()=>{
  document.getElementById("mainCont").classList.remove("valid")
    icon.classList.add("valid")
    board.classList.remove("valid")
    login.classList.remove("valid")
    calender.classList.remove("valid")
    register.classList.remove("valid")
    profile.classList.remove("valid")
    table.classList.remove("valid")
    form.classList.remove("valid")
})
form.addEventListener("click",()=>{
  document.getElementById("mainCont").classList.remove("valid")
    form.classList.add("valid")
    profile.classList.remove("valid")
    login.classList.remove("valid")
    calender.classList.remove("valid")
    register.classList.remove("valid")
    icon.classList.remove("valid")
    table.classList.remove("valid")
    board.classList.remove("valid")
    abs.classList.add("valid2")
    abs.classList.remove("valid1")
    abs.classList.remove("valid")
    abs.classList.remove("valid3")
})
table.addEventListener("click",()=>{
  document.getElementById("mainCont").classList.remove("valid")
    table.classList.add("valid")
    profile.classList.remove("valid")
    login.classList.remove("valid")
    calender.classList.remove("valid")
    register.classList.remove("valid")
    icon.classList.remove("valid")
    board.classList.remove("valid")
    form.classList.remove("valid")
})
login.addEventListener("click",()=>{
  document.getElementById("mainCont").classList.remove("valid")
    login.classList.add("valid")
    profile.classList.remove("valid")
    board.classList.remove("valid")
    calender.classList.remove("valid")
    register.classList.remove("valid")
    icon.classList.remove("valid")
    table.classList.remove("valid")
    form.classList.remove("valid")
    abs.classList.add("valid3")
    abs.classList.remove("valid1")
    abs.classList.remove("valid2")
    abs.classList.remove("valid")
})
register.addEventListener("click",()=>{
  document.getElementById("mainCont").classList.remove("valid")
    register.classList.add("valid")
    profile.classList.remove("valid")
    login.classList.remove("valid")
    calender.classList.remove("valid")
    board.classList.remove("valid")
    icon.classList.remove("valid")
    table.classList.remove("valid")
    form.classList.remove("valid")
})
calender.addEventListener("click",()=>{
  document.getElementById("mainCont").classList.remove("valid")
    calender.classList.add("valid")
    profile.classList.remove("valid")
    login.classList.remove("valid")
    board.classList.remove("valid")
    register.classList.remove("valid")
    icon.classList.remove("valid")
    table.classList.remove("valid")
    form.classList.remove("valid")
})
profile.addEventListener("click",()=>{
  document.getElementById("mainCont").classList.remove("valid")
    profile.classList.add("valid")
    icon.classList.remove("valid")
    login.classList.remove("valid")
    calender.classList.remove("valid")
    register.classList.remove("valid")
    board.classList.remove("valid")
    table.classList.remove("valid")
    form.classList.remove("valid")
    abs.classList.add("valid1")
    abs.classList.remove("valid")
    abs.classList.remove("valid2")
    abs.classList.remove("valid3")
})

// load Pages

$(document).ready(()=>{
  $("#form").click(()=>{
    $(".main-content").load("form.html")
  })
})

$(document).ready(()=>{
  $("#board").click(()=>{
    $(".main-content").load("dashboard.html")
  })
})

$(document).ready(()=>{
  $("#profile").click(()=>{
    $(".main-content").load("profile.html")
  })
})


window.addEventListener("load",()=>{
    $(".main-content").load("dashboard.html")
})