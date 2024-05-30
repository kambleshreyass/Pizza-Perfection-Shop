logoAnimation = function(){
  gsap.to("#navBar img",{
    x:10,
    repeat:-1,
    yoyo:true,
    duration: 2, 
    opacity: 0.5, 
    ease: "power1.inOut", 
    repeat: -1, 
    yoyo: true 
  })
}
logoAnimation()

navAnimation = function(){
  gsap.from("#list h2",{
    y:20,
    delay:1,
    duration:0.4,
    stagger:0.2,
    opacity:0,
    color:"red"
  })
}
navAnimation()


menuAnimation = function(){
  var menu = document.querySelector(".ri-menu-line");
  var cross = document.querySelector(".ri-close-line");

menu.addEventListener("click",function(){
  gsap.to("#blank",{
    display:"block"
  })
})
cross.addEventListener("click",function(){
  gsap.to("#blank",{
    display:"none",
    duration:0.2,
  })
})
}
menuAnimation();

gsap.from(".poppins-semibold",{
  opacity:0.3,
  ease:2,
  repeat:-1,
})

// Cursor 

var main = document.querySelector("#AllContainer");
var cursor = document.querySelector("#cursor");




main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y
  })
})


