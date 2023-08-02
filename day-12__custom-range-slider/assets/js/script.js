let body = document.querySelector('body'),
    h1 = document.querySelector('h1'),
    range = document.querySelector('.range'),
    rangeBar = document.querySelector('.range__bar');

function setRangeBar(percent){
    body.style = `background-color: rgba(0, 0, 0, ${percent  /100})`;
    h1.style = `color: rgba(0, 0, 0, ${1-(percent / 100)})`;
    rangeBar.style = `width: ${percent}%`;
    rangeBar.querySelector('span').innerText = `${percent}%`;
}

range.addEventListener('mousemove',function(e){
    let processWidth = e.pageX - this.offsetLeft,
    percent = Math.round(processWidth / this.offsetWidth * 100);
    setRangeBar(percent);
})