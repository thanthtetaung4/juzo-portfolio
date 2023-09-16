"use strict";
console.log("hello");
const form = document.querySelector("#contact-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
});
