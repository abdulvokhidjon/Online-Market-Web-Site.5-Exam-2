import { getData } from "./request.js";
import { loading } from "./loading.js";

const mostPopularList = document.querySelector(".most-popular-list");
const discountList = document.querySelector(".discount-list");
const tempPopular = document.querySelector("#most-popular-template");
const tempDiscount = document.querySelector("#discount-template");

const updateUI = (products) => {
  // Most popular products
  products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4)
    .forEach((prod) => {
      const clonePopular = tempPopular.content.cloneNode(true);
      clonePopular.querySelector(".card-popular-image").src = prod.thumbnail;
      clonePopular.querySelector(".card-popular-title").textContent =
        prod.title;
      clonePopular.querySelector(
        ".card-popular-price"
      ).textContent = `$${prod.price}`;
      clonePopular.querySelector(
        ".card-popular-rating"
      ).textContent = `Rating: ${prod.rating}/5`;
      mostPopularList.appendChild(clonePopular);
    });

  // Discounted products
  products
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 4)
    .forEach((prod) => {
      const cloneDiscount = tempDiscount.content.cloneNode(true);
      cloneDiscount.querySelector(".card-discount-image").src = prod.thumbnail;
      cloneDiscount.querySelector(".card-discount-title").textContent =
        prod.title;
      cloneDiscount.querySelector(
        ".card-discount-old-price"
      ).textContent = `$${prod.price}`;
      cloneDiscount.querySelector(".card-discount-price").textContent = `$${
        prod.price - prod.price * (prod.discountPercentage / 100)
      }`;
      cloneDiscount.querySelector(
        ".card-discount-rating"
      ).textContent = `Rating: ${prod.rating}/5`;
      discountList.appendChild(cloneDiscount);
    });
};

getData("https://dummyjson.com/products?limit=194")
  .then((data) => updateUI(data.products))
  .catch((error) => console.log(error));
