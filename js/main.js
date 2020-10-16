function init(){
  
let project = document.querySelector(".project");

    const projects = document.querySelectorAll('.project'); 
  
    projects.forEach((project) => {
      
      gsap.from(project, {
        opacity: 0,
        yPercent: 5,
        duration:  3,
        scrollTrigger: {
          trigger: project.querySelector('img'),
          start: 'top bottom-=300',
          end: 'top center',
          markers: true,
          scrub: true
        }
      })
      
    });
    
    
  }
  
  window.addEventListener('load', function(){
      init();
  });
  