
const loadProducts = () => {
  const data = [
    {
      id: 1,
      title: "Lucien Piccard",
      price: 499.95,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-leather-brown-transparent-center-dial-watch-lucien-piccard-lp-1300a3_1.jpg",
      rating: { rate: 4.6, count: 120 },
    },
    {
      id: 2,
      title: "MontBlanc",
      price: 2012.3,
      category: "men's watch",
      image:
        "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-heritage-monopusher-chronograph-leather-silver-dial-watch-montblanc-mb119952_1.jpg",
      rating: { rate: 4.1, count: "259" },
    },
        {
      id: 3,
      title: "Gevril",
      price: 55.99,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-madison-genuine-leather-blue-dial-watch-gevril-y-a24ef_1.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Gv2 By Gevril",
      price: 152.99,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/f37af02772093860da70218ca33a6351/w/o/womens-genoa-stainless-steel-mother-of-pearl-dial-watch-gv2-by-gevril-y-a24fr_1.jpg",
      rating: { rate: 3.1, count: 430 },
    },
    {
      id: 5,
      title:
        "Bell And Ross",
      price: 69.25,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-horolum-chronograph-rubber-grey-dial-watch-bell-and-ross-blrbr0394-gr-st-scar_1.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Livingston  ",
      price: 168,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-livingston-stainless-steel-ivory-dial-watch-brooklyn-watch-co-bw-101-m1712_1.jpg",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "Greenpoint",
      price: 29.99,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/f37af02772093860da70218ca33a6351/m/e/mens-greenpoint-nylon-black-dial-watch-brooklyn-watch-co-bw-8125q1_1.jpg",
      rating: { rate: 3.6, count: 400 },
    },
    {
      id: 8,
      title: "Dunham Rose",
      price: 100.99,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-dunham-stainless-steel-black-skeletal-display-dial-watch-brooklyn-bw-202-m3262_1.jpg",
      rating: { rate: 3.9, count: 100 },
    },
    {
      id: 9,
      title: "Bedford Brownstone II",
      price: 84,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/f37af02772093860da70218ca33a6351/m/e/mens-bedford-brownstone-ii-chronograph-stainless-steel-black-dial-watch-bw-308-blk-3_1.jpg",
      rating: { rate: 4.9, count: 203 },
    },
    {
      id: 10,
      title: "Black Dial Watch",
      price: 72.50,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/f37af02772093860da70218ca33a6351/m/e/mens-bedford-brownstone-ii-chronograph-leather-black-dial-watch-brookly-bw-307-blk-3_1.jpg",
      rating: { rate: 4.2, count: 470 },
    },
    {
      id: 11,
      title:
        "Chronograph Stainless Steel ",
      price: 89,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-bedford-brownstone-ii-chronograph-stainless-steel-grey-dial-watch-bw-308-gry-1_1.jpg",
      rating: { rate: 4.8, count: 319 },
    },
    {
      id: 12,
      title:
        "Brooklyn Blue Dial ",
      price: 114,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/f37af02772093860da70218ca33a6351/w/y/wyckoff-leather-black-blue-dial-watch-brooklyn-watch-co-bw-8353a2_1.jpg",
      rating: { rate: 4.8, count: 400 },
    },
    {
      id: 13,
      title: "Brooklyn Leather Brown",
      price: 99.99,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-dakota-chronograph-leather-brown-dial-watch-brooklyn-watch-co-bw-205-m2931_1.jpg",
      rating: { rate: 3.9, count: 250 },
    },
    {
      id: 14,
      title:
        "Brooklyn Silver Star ",
      price: 999.99,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-dunham-stainless-steel-silver-skeletal-display-dial-watch-brooklyn-bw-202-m1112_1.jpg",
      rating: { rate: 4.2, count: 140 },
    },
    {
      id: 15,
      title: "Brooklyn Royal 325",
      price: 96.99,
      category: "men's watch",
      image: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-bedford-brownstone-ii-chronograph-stainless-steel-blue-dial-watch-bw-308-blu-2_1.jpg",
      rating: { rate: 4.6, count: 235 },
    },


  ];
  showProducts(data);
};

// show all product in UI
const showProducts = (products) => {
  const allProducts = products.map((pd) => pd);
  for (const product of allProducts) {
    const image = product.image;
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<div class="single-product">
      <div>
    <img class="product-image" src=${image}></img>
      </div>
      <h3><b>${product.title}</b></h3>
      
      <p><b>Category:</b> ${product.category}</p>
      
      <h3>Price: $ ${product.price}</h3>

      <h5><b>Product Rating: ${product.rating.rate}</b></h5>
      <h5><b>Total Reviews: ${product.rating.count}</b></h5>
       

      <button onclick="addToCart(${product.id},${product.price})" id="addToCart-btn" class="buy-now btn btn-info">Add to Cart</button>
      </div>
      `;
    document.getElementById("all-products").appendChild(div);
  }
};

// count area
let count = 0;
const addToCart = (id, price) => {
  count = count + 1;
  // update price
  updatePrice("price", price);

  // update tax
  updateTaxAndCharge();

  // update total
  updateTotal();
  document.getElementById("total-Products").innerText = count;
};

const getInputValue = (id) => {
  const element = document.getElementById(id).innerText;

  const converted = +element;
  return converted;
};

// main price update function
const updatePrice = (id, value) => {
  const convertedOldPrice = getInputValue(id);
  const convertPrice = +value;
  const total = convertedOldPrice + convertPrice;
  document.getElementById(id).innerText = +total;
};

// set innerText function
const setInnerText = (id, value) => {
  document.getElementById(id).innerText = +value;
};

// update delivery charge and total Tax
const updateTaxAndCharge = () => {
  const priceConverted = getInputValue("price");
  if (priceConverted > 200) {
    setInnerText("delivery-charge", 30);
    setInnerText("total-tax", (priceConverted * 0.2).toFixed(2));
  }
  if (priceConverted > 400) {
    setInnerText("delivery-charge", 50);
    setInnerText("total-tax", (priceConverted * 0.3).toFixed(2));
  }
  if (priceConverted > 500) {
    setInnerText("delivery-charge", 60);
    setInnerText("total-tax", (priceConverted * 0.4).toFixed(2));
  }
};

//grandTotal update function
const updateTotal = () => {
  const grandTotal =
    getInputValue("price") +
    getInputValue("delivery-charge") +
    getInputValue("total-tax");
  document.getElementById("total").innerText = grandTotal.toFixed(2);
};


loadProducts();
