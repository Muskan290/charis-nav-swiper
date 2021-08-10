let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('nav ul');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
new fullpage('#fullpage',{
    
    autoScrolling: true,
    navigation: true,
    onLeave: (origin,destination,direction)=>{
        const section = destination.item;
        const title = section.querySelector("h1");
        const tL = new TimelineMax();
        tL.fromTo(title,0.5,{y:'50', opacity:0}, {y:0 , opacity:1});

        if(destination.index===1){
            
            const description = document.querySelector(".description");
            // tL.fromTo(bags, 0.7,{x: '-10%'}, {x: '-10%'})
            tL.fromTo(description,0.5,{y:'50', opacity:0}, {y:0 , opacity:1});
            // .fromTo(bags[0],1,{opacity: 0},{opacity:1})
            // .fromTo(bags[1],1,{opacity: 0},{opacity:1})
            // .fromTo(bags[2],1,{opacity: 0},{opacity:1});

            var swiper = new Swiper(".mySwiper", {
                effect: "cube",
                grabCursor: true,
                cubeEffect: {
                  shadow: false,
                  slideShadows: false,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
                pagination: {
                  el: ".swiper-pagination",
                },
              });

        }
        if(direction==="down"){
            const navb = document.querySelector("nav");
            navb.style.display = "none";
        }
        if(direction==="up"){
            const navb = document.querySelector("nav");
            navb.style.display = "flex";
        }

        
        
        
    
    }
}

);


