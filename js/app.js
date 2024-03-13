import { reviews } from "./data.js";

// elements
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");
const random_btn = document.querySelector(".random-btn");

// set starting item
let current_review = 0;

// events
// DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[current_review];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// prev_btn
prev_btn.addEventListener("click", () => {
    changeReview("prev");
});

// next_btn
next_btn.addEventListener("click", () => {
    changeReview("next");
});

// random_btn
random_btn.addEventListener("click", () => {
    changeReview("random");
});

// change the review logic
const changeReview = (action) => {
    if (action == "next") {
        current_review++;
        validateCurrentReview();
    } else if (action == "prev") {
        current_review--;
        validateCurrentReview();
    } else if (action == "random") {
        const old_review = current_review;
        current_review = Math.floor(Math.random() * reviews.length);
        if (old_review == current_review) {
            current_review++;
            validateCurrentReview();
        }
    }
    updatePerson();
};

// validate review so it doesn't go out of reviews array index
const validateCurrentReview = () => {
    if (current_review >= reviews.length) {
        current_review = 0;
    } else if (current_review < 0) {
        current_review = reviews.length - 1;
    }
};

const updatePerson = () => {
    // change the values and imgs
    const item = reviews[current_review];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};
