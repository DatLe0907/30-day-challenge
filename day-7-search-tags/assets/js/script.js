let content = document.querySelector('.search-tag__content'),
      input = document.querySelector('.search-tag__input');
    btnRemoveAll = document.querySelector('.search-tag__btn')
let tags = ["NodeJs","ReactJs"];

function renderTag(){
    content.innerHTML = '';
    let vitualTagDoms = '';
    for(let index in tags){
        const tag = tags[index];
        content.innerHTML += `
        <li>
          ${tag}
          <i class="fa-solid fa-xmark" onclick = removeTag(${index})></i>
        </li>
        `
    }
    content.appendChild(input);
    input.focus();
}

function removeTag(index){
    tags.splice(index, 1)
    renderTag()
}

renderTag();
input.addEventListener('keydown', function(e){
    if (!tags.includes(input.value.trim()) && input.value.trim() != "") {
        if (e.key == 'Enter') {
            tags.push(input.value.trim());
            input.value = '';
            renderTag();
            console.log(tags);
        }
    }
    else {
        input.value = '';
    }
})

btnRemoveAll.addEventListener('click',function(){
    tags = []
    renderTag()
})


