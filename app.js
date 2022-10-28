
//  menu button 
 const menuButton = () =>{
 const menu = document.querySelector('.icon'); 
 const heading = document.querySelector('.heading-menu');
 const headingUl = document.querySelectorAll('.heading-menu li');
  menu.addEventListener("click", () => {
     heading.classList.toggle("heading-active");
     headingUl.forEach((link, index) =>{
         if(link.style.animation){
             link.style.animation = '';
            } else{
                link.style.animation = `headingFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}
    menuButton();
    // scroll animation 
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 300;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
