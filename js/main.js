function init(){
  
    const projects = document.querySelectorAll('.project'); 
  
    projects.forEach((project) => {
      
      gsap.from(project, {
        opacity: 0,
        yPercent: 5,
        scrollTrigger: {
          trigger: project.querySelector('img'),
          start: 'top bottom-=300',
          end: 'top center',
          markers: true,
        }
      })
      
    });

    
  }
  
  window.addEventListener('load', function(){
      init();
  });
  