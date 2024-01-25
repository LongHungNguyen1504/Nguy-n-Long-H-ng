
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
        let output = `<div class="col-sm-4">
        <div class="best_shoes">
            <p class="best_text">${data[i].title} </p>
            <div class="shoes_icon"><img src="${data[i].image}"></div>
            <div class="star_text">
                <div class="left_part">
                   
                </div>
                <div class="right_part">
                    <div class="shoes_price"></div><span style="color: #ff4e5b;font-size : 20px; display : flex; flex-direction :row; margin-top: 10px;  ">${data[i].price}</span></div>
                </div>
            </div>
        </div>
    </div>`
        product_area.innerHTML += output
    }
}

// function loadProducts(data) {
//     for (let i = 0; i < data.length; i++) {
//         let output = `<div class="product col-3">
//         <h3 class="product-title">${data[i].title}</h3>
//         <img
//           src="${data[i].image}"
//           alt=""
//           class="product-img"
//         />
//         <div class="product-footer">
//           <h5>$<span class="product-price">${data[i].price}</span></h5>
//           <button class="product-btn" onclick="addProduct(event)">Buy now!</button>
//         </div>
//       </div>`
//         product_area.innerHTML += output
//     }
// }
{/* <ul>
    <li><a href="#"><img src="images/star-icon.png"></a></li>
    <li><a href="#"><img src="images/star-icon.png"></a></li>
    <li><a href="#"><img src="images/star-icon.png"></a></li>
    <li><a href="#"><img src="images/star-icon.png"></a></li>
    <li><a href="#"><img src="images/star-icon.png"></a></li>
</ul> */}
let users = []
function register() {
    let fname_input = document.getElementById('fname-input').value
    let lname_input = document.getElementById('lname-input').value
    let email_input = document.getElementById('email-input').value
    let password_input = document.getElementById('password-input').value
    // tạo object chứa dữ liệu nhập vào
    let user = {
        fname: fname_input,
        lname: lname_input,
        email: email_input,
        password: password_input
    }
    // push object user vào trong array
    users.push(user)
    // chuyển đổi array users thành JSON string và lưu lên local Storage
    localStorage.setItem("users", JSON.stringify(users))
    document.getElementById('fname-input').value = ""
    document.getElementById('lname-input').value = ""
    document.getElementById('email-input').value = ""
    document.getElementById('password-input').value = ""
}
function checkInputValue(value1, value2) {
    if (value1 == value2) {
        return true
    }
    return false
}

function login() {
    let email_input = document.getElementById('login-email-input').value
    let password_input = document.getElementById('login-password-input').value
    let usersStorage = JSON.parse(localStorage.getItem('users'))

    for (let i = 0; i < usersStorage.length; i++) {
        if (checkInputValue(email_input, usersStorage[i].email)) {
            if (checkInputValue(password_input, usersStorage[i].password)) {
                alert("Login successful!")
                return
            } else {
                alert("Wrong password")
                return
            }
        } else {
            alert("User is not existed!")
            return
        }
    }
}