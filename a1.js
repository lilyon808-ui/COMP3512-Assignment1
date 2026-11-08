import config from './data/data-minifed.json' with { type: 'json' };

// Verifying that products array was created from the json file
console.log(config);

// Grabbing the first 20 products in the products array
const first20Products = [];
for (let i = 0; i < 20; i++) {
    first20Products.push(config.products[i])
};
console.log(first20Products);

// Helper functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const _ = (tag) => document.createElement(tag);

// Loop through the first 20 products and display
const prodSect = $("#products");
for (let p of first20Products) {
    const card = _("div");
    card.classList.add("product-card")
    const img = _("img");
    img.src = p.thumbnail
    const title = _("h3");
    title.textContent = p.title;
    const price = _("p");
    price.textContent = p.price;

    // Display the product ID in a simple alert when the thumbnail is clicked
    img.addEventListener("click", () => {alert(p.id)});

    // Display the product ID and title in a simple alert when the Add to Cart is clicked
    const btn = _("button");
    btn.addEventListener("click", () => {alert(p.id + " " + p.title)});
    btn.textContent = "+";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(btn);
    prodSect.appendChild(card);
};
