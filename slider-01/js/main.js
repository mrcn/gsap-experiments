const { default: gsap } = require("gsap/gsap-core");
const { getDisplayName } = require("next/dist/next-server/lib/utils");

function init(){

    
    // welcome to the projects gallery
    // gsap.set('.projects', {autoAlpha: 1});
    gsap.set('.project', {x:'-100%'});
    
}

window.addEventListener('load', function(){
    init();
});
