function init(){
  

const projects = document.querySelectorAll('.project'); 

projects.forEach((project) => {
    
    gsap.from(project, {
    opacity: 0,
    x: -500,
    duration:  3,
    scrollTrigger: { 
        trigger: project.querySelector('img'),
        start: 'top bottom-=300',
        end: 'top center',
        markers: true
    }
    })
    
});
}

window.addEventListener('load', function(){
    init();
});
