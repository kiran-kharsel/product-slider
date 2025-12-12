// all products
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    rating: 4.5,
    image: "https://png.pngtree.com/png-clipart/20250415/original/pngtree-wireless-headphone-png-image_20721964.png"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.00,
    rating: 4.7,
    image: "https://png.pngtree.com/png-vector/20240216/ourmid/pngtree-apple-iphone-11-pro-max-clear-case-3d-render-png-image_11742978.png"
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: 1299.99,
    rating: 4.8,
    image: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-powerful-gaming-laptop-on-a-white-background-png-image_15836491.png"
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199.99,
    rating: 4.3,
    image: "https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-smart-watch-cutout-png-file-png-image_11464373.png"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 59.99,
    rating: 4.4,
    image: "https://png.pngtree.com/png-vector/20250123/ourmid/pngtree-bluetooth-speaker-design-png-image_15308412.png"
  },
  {
    id: 6,
    name: "Tablet",
    price: 349.99,
    rating: 4.2,
    image: "https://png.pngtree.com/png-clipart/20231206/original/pngtree-apple-ipad-air-wi%E2%80%91fi-photo-png-image_13784255.png"
  },
  {
    id: 7,
    name: "DSLR Camera",
    price: 899.00,
    rating: 4.6,
    image: "https://png.pngtree.com/png-clipart/20250824/original/pngtree-professional-dslr-camera-with-large-lens-png-image_21318188.png"
  },
  {
    id: 8,
    name: "Wireless Keyboard",
    price: 49.99,
    rating: 4.1,
    image: "https://png.pngtree.com/png-vector/20250214/ourmid/pngtree-wireless-keyboard-with-transparency-background-png-image_15468450.png"
  },
  {
    id: 9,
    name: "External Hard Drive",
    price: 79.99,
    rating: 4.5,
    image: "https://png.pngtree.com/png-clipart/20240901/original/pngtree-external-hard-drive-png-image_15909168.png"
  },
  {
    id: 10,
    name: "4K Monitor",
    price: 399.99,
    rating: 4.7,
    image: "https://png.pngtree.com/png-vector/20250725/ourmid/pngtree-4k-curved-screen-tv-display-graphic-png-image_16860421.webp"
  }
];

// dom element
const sliderElem = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')


// show all cards
function showCards(){
    products.forEach((item) => {
        let div = document.createElement('div')
        div.classList.add('card');
        div.innerHTML = `
        <img src=${item.image} alt="card-image">
        <div>
            <h5 class="title">${item.name}</h5>
            <p class="rating">⭐${item.rating}</p>
        </div>
        <div>
            <p class="price">${item.price}</p>
            <button>+</button>
        </div>
        `;
        sliderElem.appendChild(div);
    })
};

showCards();

let currentLeft = 0;
let slideVlaue = 240

prevBtn.addEventListener('click', function(){
    currentLeft -= slideVlaue;
    if(currentLeft == 0){
        currentLeft = 20;
        sliderElem.style.left = `${currentLeft}px`;
        prevBtn.disabled = true;
    }else{
        sliderElem.style.left = `-${currentLeft}px`;
    }
    //sliderElem.style.left = `-${currentLeft}px`;
    console.log(currentLeft);
});

nextBtn.addEventListener('click', function(){
    currentLeft += slideVlaue;
    //console.log(currentLeft);
    sliderElem.style.left = `-${currentLeft}px`;
})