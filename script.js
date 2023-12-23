const scroll = new LocomotiveScroll({
    //In the element we want the smooth transition we will put that element in querySelector('//name of element')
    el: document.querySelector('#main'),
    smooth: true
});
var timer;

function firstPage(){
    var tl = gsap.timeline();

    tl.from("#nav" , {
        y:'-10' ,
        opacity:0,
        duration: 2,
        ease:Expo.easeInOut
    })
    .to(".boundingele" , {
        y: 0 ,
        ease:Expo.easeInOut,
        duration: 2,
        delay:-1,
        stagger: .2
        
    })
    .from("#heroFooter" , {
        y:-10 ,
        opacity:0,
        duration: 1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}

function mousechaptakaro(){
    
    
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove" , function(details){
        clearTimeout(timer);

        xscale = gsap.utils.clamp(.8,1.2,details.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,details.clientY - yprev);

        yprev = details.clientY;
        xprev = details.clientX;

        circleMouseFollower(xscale,yscale);
        
        timer = setTimeout(function(){
            document.querySelector('#circleMouse').style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`;
        }, 100);

    });
}


function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove" , function(details){
            // console.log(details.clientX , details.clientY);
            this.document.querySelector('#circleMouse').style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;
    })

}

mousechaptakaro();
circleMouseFollower();
firstPage();


// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });


