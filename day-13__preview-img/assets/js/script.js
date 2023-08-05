let uploadImg = document.querySelector('#picture'),
    preview = document.querySelector('.preview'),
    error = document.querySelector('.error');


uploadImg.addEventListener('change', function(e){
   let file = uploadImg.files[0];

    if(!file)
    return

    if(file.name.endsWith('.jpg') === false){
        error.innerHTML = 'Chỉ hỗ trợ định dạng jpg';
        return
    }

    else{
        error.innerHTML = '';
    }

    if(file.size / (1204 * 1204) > 5){
        error.innerHTML = 'Dung lượng ảnh tối đa là 5mb';
        return
    }

    else{
        error.innerHTML = '';
    }
    let img = document.createElement('img'),
        fileReader = new FileReader();
    
    fileReader.readAsDataURL(file);
    fileReader.onloadend = function(e){
        img.src = e.target.result;
    }

    preview.appendChild(img)

})  