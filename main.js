// const image = document.createElement('img');
// image.src = "image-product-desktop.jpg"
// document.body.appendChild(image)


let m_title = "perfume"
let title = "gabrielle essence eau de perfum"
let disc = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
let price = "$149.99 "
let o_price = "$169.99"
let button = "add to cart"
const image = document.createElement('img');
image.src = "image-product-desktop.jpg"

let product_cart = `
        <div class="main-container">
        <div class="container">
            <img src="${image.src}" alt="">

            <div class="text-container">
                <div class="container-t">
                    <h1>${m_title}</h1>
                    <h2>${title}</h2>
                    <p>${disc}</p>
                    <h3 class="price">${price} <span class="old">${o_price}</span></h3>
                </div>
                <div class="button">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <button>${button}</button>
                </div>
            </div>
        </div>
    </div>`

document.write(product_cart)



