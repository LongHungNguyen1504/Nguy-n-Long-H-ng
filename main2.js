init()

function init() {
    getProductAPI()
}

//fetch API
async function getProductAPI() {
    let data = await fetch('data.json')
        .then(response => response.json()) // lấy dữ liệu từ fetch ('link gì đó') lwuu vào data
        .then(json => json) // chuyển respone thành json sâu đó đổi thành arra/objetc và lưu vào biến data
    console.log(data)
    loadProducts(data)
}


let product_area = document.getElementById("product-area")

// data[i].productName
function loadProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let output = `<div class="product col-3">
        <h3 class="product-title">${data[i].title}</h3>
        <img
          src="${data[i].image}"
          alt=""
          class="product-img"
        />
        <div class="product-footer">
          <h5> <span class="product-price">${data[i].price}</span></h5>
          <button class="product-btn" onclick="addProduct(event)">Buy now!</button>
        </div>
      </div>`
        product_area.innerHTML += output
    }
}
function searchProduct() {
    let search_input = document.getElementById("searchbar").value
    search_input = search_input.toUpperCase()
    let product_titles = document.getElementsByClassName("product-title") // arrray
    let products = document.getElementsByClassName("product")
    for (let i = 0; i < products.length; i++) {
        // nếu như trong tên product mà có chữ nhập vào từ search input thì thẻ product hiện lên
        if (product_titles[i].innerText.includes(search_input)) {
            products[i].style.display = 'block'
        } // nếu không thì ẩn thẻ product đi
        else {
            products[i].style.display = 'none'
        }
    }

}
let id = 0
let total = 0
let cartBody = document.getElementById("cart-body")
let cartTotal = document.getElementById("total-price")
let cartBtn = document.getElementById("cart-btn")
let cartWrapper = document.getElementById("cart-wrapper")
cartBtn.addEventListener("click", () => {
    cartWrapper.classList.toggle("cart-on")
})
let addProduct = (event) => {
    let title = event.target.parentElement.parentElement.childNodes[1].innerText
    let price = event.target.parentElement.childNodes[1].childNodes[1].innerText
    id += 1
    total += parseInt(price)
    let output = `<tr>
<td>${id}</td>
<td>${title}</td>
<td>${price}</td>
</tr>`
    cartBody.innerHTML += output
    cartTotal.innerHTML = total + ".000"
}