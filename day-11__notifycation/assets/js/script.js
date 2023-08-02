let btnList = document.querySelectorAll('button');
btnList.forEach(btn => {
    btn.addEventListener('click',function(){
        switch(btn.classList[0]){
            case 'control__success': 
                creatToast('success',3000);
                break;
            case 'control__error':
                creatToast('error',3000);
                break;
            case 'control__warning':
                creatToast('warning',3000);
                break;
        }
    })
});



function creatToast(status,timeOut){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status);
    switch(status){
        case 'success': 
            toast.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <span>This is an ${status} message!</span>
            `;
            break;
        case 'error' :
            toast.innerHTML = `
            <i class="fa-solid fa-circle-xmark"></i>
            <span>This is an ${status} message!</span>
            `;
            break;
        case 'warning' :
        toast.innerHTML = `
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>This is an ${status} message!</span>
        `;
        break;
    }


    let toastList = document.getElementById('toasts');
    console.log(toastList)
    toastList.appendChild(toast);


setTimeout(function(){
    toast.style = "animation: slide-hide 2s ease forwards";
},timeOut)
setTimeout(function(){
    toastList.removeChild(toast);
},timeOut+2000)
}