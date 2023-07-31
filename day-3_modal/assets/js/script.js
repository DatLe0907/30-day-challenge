document.querySelector(".modal--open").addEventListener('click',function(){
    document.querySelector('.modal__overlay').style.display='block';
    document.querySelector('.modal__container').style.display='block';
    document.querySelector('.modal--open').style.display='none';
})

document.querySelector(".modal__close").addEventListener('click',function(){
    document.querySelector('.modal__overlay').style.display='none';
    document.querySelector('.modal__container').style.display='none';
    document.querySelector('.modal--open').style.display='block';
})