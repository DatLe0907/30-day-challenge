const images = document.querySelectorAll(".image__wrapper .image img");
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery-inner img");
const close = document.querySelector(".gallery .close");

const next = document.querySelector(".control.next");
const prev = document.querySelector(".control.prev");



let currentIndex = 0;

images.forEach(function(image,index){
    image.addEventListener('click',function(){
        currentIndex = index;
        showGallery();
    })
})

function showGallery(){
    if (currentIndex === images.length - 1){
        next.classList.add('hide');
    }
    else{
        next.classList.remove('hide');
    }

    if(currentIndex === 0){
        prev.classList.add('hide')
    }
    else{
        prev.classList.remove('hide')
    }

    gallery.classList.add('show')
    galleryImg.src = images[currentIndex].src;
}

close.addEventListener('click',function(){
    gallery.classList.remove('show');
})

next.addEventListener("click", function(){
   if( currentIndex != images.length - 1 ){
    currentIndex++;
}
    showGallery();
  });
  prev.addEventListener("click", function(){
    if( currentIndex != 0 ){
     currentIndex--;
 }
    showGallery();
  });