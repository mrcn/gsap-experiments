function init(){

    
    // welcome to the projects gallery
    gsap.set('.projects', {autoAlpha: 1}); // this makes the arrows visible, which are in the "projects" div
    gsap.set('.project', {x:'-100%'}); // this moves a project off screen
    
    const element = document.querySelector('div.project03');
        projectClasses = element.className.split(' '); // 2. by splitting the body class with a space
        projectClass = projectClasses[1]; // 3. taking the second value of the class

    // https://ihatetomatoes.net/module-1/g3ps-animation-in-604/
    const tlIn = gsap.timeline();
    tlIn.fromTo(element, {
        autoAlpha: 0,
        x: '-100%'
    }, {
        duration: .7,
        x: 0,
        autoAlpha: 1,
        onStart: updateClass, // 3. which we pass to the onStart callback function 
        onStartParams: [projectClass] // 4. and then we update the class
    });

    // 1. removing the body class 
    function updateClass(projectClass){
        document.querySelector('body').className = projectClass;
    }

    
}

window.addEventListener('load', function(){
    init();
});
