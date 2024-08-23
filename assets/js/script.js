"use strict";
const elementToggleFunc = function (e) {
		e.classList.toggle("active");
	},
	sidebar = document.querySelector("[data-sidebar]"),
	sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () {
	elementToggleFunc(sidebar);
});
const testimonialsItem = document.querySelectorAll("[testimonials-data-item]"),
	modalContainer = document.querySelector("[testimonials-data-modal-container]"),
	modalCloseBtn = document.querySelector("[testimonials-data-modal-close-btn]"),
	overlay = document.querySelector("[testimonials-data-overlay]"),
	modalImg = document.querySelector("[testimonials-data-modal-img]"),
	modalTitle = document.querySelector("[testimonials-data-modal-title]"),
	modalText = document.querySelector("[testimonials-data-modal-text]"),
	testimonialsModalFunc = function () {
		modalContainer.classList.toggle("active"), overlay.classList.toggle("active");
	};
for (let i = 0; i < testimonialsItem.length; i++)
	testimonialsItem[i].addEventListener("click", function () {
		(modalImg.src = this.querySelector("[testimonials-data-avatar]").src),
		(modalImg.alt = this.querySelector("[testimonials-data-avatar]").alt),
		(modalTitle.innerHTML = this.querySelector("[testimonials-data-title]").innerHTML),
		(modalText.innerHTML = this.querySelector("[testimonials-data-text]").innerHTML),
		testimonialsModalFunc();
	});
modalCloseBtn.addEventListener("click", testimonialsModalFunc), overlay.addEventListener("click", testimonialsModalFunc);
const selectButton = document.querySelector("[data-select]"),
	selectItemsContainer = document.querySelector("[data-select-items]"),
	selectValue = document.querySelector("[data-selecct-value]"),
	selectItems = document.querySelectorAll("[data-select-item]");
selectButton.addEventListener("click", function () {
		elementToggleFunc(selectItemsContainer),
			selectItemsContainer.classList.contains("active") ?
			((selectItemsContainer.style.height = `${selectItemsContainer.scrollHeight}px`), (selectItemsContainer.style.opacity = "1"), (selectItemsContainer.style.transition = "height 0.3s ease, opacity 0.3s ease")) :
			((selectItemsContainer.style.height = "0"), (selectItemsContainer.style.opacity = "0"), (selectItemsContainer.style.transition = "height 0.3s ease, opacity 0.3s ease"));
	}),
	selectItems.forEach((e) => {
		e.addEventListener("click", function () {
			let e = this.innerText.toLowerCase();
			(selectValue.innerText = this.innerText), selectItemsContainer.classList.remove("active"), (selectItemsContainer.style.height = "0"), (selectItemsContainer.style.opacity = "0"), filterFunc(e);
		});
	});

	const filterItems = document.querySelectorAll("[data-filter-item]"),
	filterFunc = function (selectedCategory) {
		filterItems.forEach((item) => {
		let itemCategory = item.dataset.category.toLowerCase().trim();

		// Log the current item category and selected category for debugging
		console.log("Item Category:", itemCategory);
		console.log("Selected Category:", selectedCategory);

		// Apply filtering logic
		if (selectedCategory === itemCategory) {
			item.classList.add("active");
			item.style.display = "block"; // Show the matching item
		} else {
			item.classList.remove("active");
			item.style.display = "none"; // Hide the non-matching items
		}
		});
	};


let lastClickedBtn = document.querySelector("[data-filter-btn].active");
document.querySelectorAll("[data-filter-btn]").forEach((e) => {
	e.addEventListener("click", function () {
		let e = this.innerText.toLowerCase();
		(selectValue.innerText = this.innerText), filterFunc(e), lastClickedBtn.classList.remove("active"), this.classList.add("active"), (lastClickedBtn = this);
	});
});
const form = document.querySelector("[data-form]"),
	formInputs = document.querySelectorAll("[data-form-input]"),
	formBtn = document.querySelector("[data-form-btn]");
formInputs.forEach((e) => {
	e.addEventListener("input", function () {
		form.checkValidity() ? formBtn.removeAttribute("disabled") : formBtn.setAttribute("disabled", "");
	});
});
const navigationLinks = document.querySelectorAll("[data-nav-link]"),
	pages = document.querySelectorAll("[data-page]");
navigationLinks.forEach((e, t) => {
		e.addEventListener("click", function () {
			pages.forEach((e, t) => {
				this.innerHTML.toLowerCase() === e.dataset.page ? (e.classList.add("active"), navigationLinks[t].classList.add("active"), window.scrollTo(0, 0)) : (e.classList.remove("active"), navigationLinks[t].classList.remove("active"));
			});
		});
	}),
	console.log("script.js loaded");