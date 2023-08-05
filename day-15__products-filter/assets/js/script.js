let mockData = fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let productList = document.querySelector(".product-list");
    productList.innerHTML = "";
    data.forEach(function (item) {
      let newProduct = document.createElement("div");
      newProduct.classList.add("product-item");
      newProduct.innerHTML = `
        <a href="" >
            <img src="${item.image}" alt="">
            <div class="product-info">
                <h5 class="name">${item.title}</h5>
                <p class="cost">$${item.price}</p>
            </div>
        </a>
    `;
      productList.appendChild(newProduct);
    });
  });

  let searchInput = document.querySelector('#filter');
  searchInput.addEventListener('input',function(e){
      let textSearch = e.target.value.trim().toLowerCase();
      console.log(textSearch)
    productListDOM = document.querySelectorAll('.product-item');
    productListDOM.forEach(function(item){
        if(item.innerText.toLowerCase().includes(textSearch)){
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
        }
    })
  })
