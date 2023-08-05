let animationElements = document.querySelectorAll('.show-on-scroll');

function toggleAnimationEleInWin(element){
    let rect = element.getClientRects()[0],
    heightScreen = window.innerHeight;

    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        element.classList.add('start')
    }
    else{
        element.classList.remove('start')
    }
}

function checkAnimation(){
    animationElements.forEach(function(element){
        toggleAnimationEleInWin(element)
    })
}

window.onscroll = checkAnimation;