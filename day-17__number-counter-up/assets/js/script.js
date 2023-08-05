let mockData = [
    {
        app: 'Facebook',
        follower: 3300
    },
    {
        app: 'Youtube',
        follower: 1000
    },
    {
        app: 'Tiktok',
        follower: 9900
    },
    {
        app: 'Instagram',
        follower: 5000
    }

]
let main = document.querySelector('.main');
mockData.forEach(function(data){
    let counterElement = document.createElement('div');
    counterElement.classList.add('counter');
    counterElement.innerHTML = `
        <p>${data.app}</p>
        <span class="number">${data.follower}</span>
    `
    main.appendChild(counterElement)
})

function count(element){
    let numberElement = element.querySelector('.number'),
    to = parseInt(element.querySelector('.number').innerText),
    count = 0,
    time = 250,
    step = to / time
    let counting = setInterval(function(){
        count+=step;
        if(count > to){
            clearInterval(counting);
            numberElement.innerText = to;
        }
        else {
            numberElement.innerText = Math.round(count);
        }
    },1)
}
let countList = document.querySelectorAll('.counter');
countList.forEach(function(item){
    count(item)
})


