let boxList = document.querySelectorAll('.box'),
    boxTargetList = document.querySelectorAll('.box__target');

let currentTarget = null;
boxTargetList.forEach(function(boxTarget){
    boxTarget.addEventListener('dragstart',function(e){
        this.classList.add('drag-img');
        currentTarget = this;
    })
    boxTarget.addEventListener('dragend',function(e){
        this.classList.remove('drag-img')
    })
})

boxList.forEach(function(box){
    box.addEventListener('dragover',function(e){
        e.preventDefault();
        this.appendChild(currentTarget)
    })
    box.addEventListener('drop',function(e){
        this.appendChild(currentTarget)
    })
})