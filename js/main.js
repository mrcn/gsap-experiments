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
    
    
  //     gsap.from("#project02", {
  //       scrollTrigger: {
  //         trigger:"#project02",
  //         start: 'top bottom-=50',
  //         end: 'bottom bottom-=50',
  //         // scrub: 1,
  //         // markers: true
  //     },
  //       duration: 3,
  //       x: -500,
  //     })   
    
  //     gsap.from("#project01", {
  //       scrollTrigger: {
  //         trigger:"#project01",
  //         start: 'top bottom-=50',
  //         end: 'bottom bottom-=50',
  //         // scrub: 1,
  //         markers: true
  //     },
  //       duration: 3,
  //       x: 500,
  //     })   
  }
  
  window.addEventListener('load', function(){
      init();
  });
  