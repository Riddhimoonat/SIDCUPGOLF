var crsr = document.querySelector(".cursor")
var blurr = document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blurr.style.left = dets.x-200+"px"
    blurr.style.top = dets.y-200+"px"
})

var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
    crsr.style.border= "0.2px solid #fff"
    crsr.style.backgroundColor = "transparent"
})  
elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border= "0px solid #95C11E"
    crsr.style.backgroundColor = "95C11E"
})  
})
gsap.to(".nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height:"120px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start: "top -25%",
        end:"top -70%",
        scrub: 2
    }
});

gsap.from(".about-us img, .about-us-in", {
    y:50,
opacity:0,
duration:1,
delay:0.5,
// stagger:0.4,
scrollTrigger:{
    trigger:".about-us",
    scroller:"body",
    // markers:true,
    start: "top 80%",
    end:"top 70%",
    scrub: 1,
},
});

gsap.from(".card", {
scale:0.8,
opacity:0,
duration:1,
stagger:0.1,
scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start: "top 80%",
    end:"top 70%",
    scrub: 2,
},
});

gsap.from("#colon1", {
 y:-70,
x:-70,
delay:1,
scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start: "top 50%",
    end:"top 40%",
    scrub: 4,
},
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
//   delay: 1,
  scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 60%",
    scrub: 4,
},
});

gsap.from(".page4 h1",{
    y:50,
    scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 60%",
    scrub: 4,
    },
})


document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});