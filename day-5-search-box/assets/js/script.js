document.querySelector('.search-box__btn').addEventListener('click',function(){
    const openCheck = document.querySelector('.search-box').classList.contains('open')
    if(openCheck){
        document.querySelector('.search-box').classList.remove('open');
    }
    else{
        document.querySelector('.search-box').classList.add('open');
    }
})