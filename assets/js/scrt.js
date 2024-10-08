"use strict";

function customAlert(e, t) {
	let n = document.body,
		d = document.createElement("div");
	d.classList.add("backdrop"), n.appendChild(d);
	let l = document.createElement("div");
	l.classList.add("alert-container");
	let i = document.createElement("div");
	i.classList.add("alert-content");
	let r = document.createElement("h2");
	r.textContent = e;
	let c = document.createElement("p");
	c.textContent = t;
	let a = document.createElement("button");

	function o() {
		n.removeChild(d), n.removeChild(l), document.removeEventListener("keydown", s)
	}

	function s(e) {
		"Escape" === e.key && o()
	}
	a.textContent = "OK", a.addEventListener("click", o), i.appendChild(r), i.appendChild(c), i.appendChild(a), l.appendChild(i), n.appendChild(l), document.addEventListener("keydown", s)
}
document.addEventListener("contextmenu", e => e.preventDefault()), document.addEventListener("keydown", function (e) {
	let t = "F12" === e.key,
		n = e.ctrlKey && e.shiftKey && ("I" === e.key || "i" === e.key),
		d = e.ctrlKey && e.shiftKey && ("J" === e.key || "j" === e.key),
		l = e.ctrlKey && e.shiftKey && ("C" === e.key || "c" === e.key),
		i = e.ctrlKey && ("S" === e.key || "s" === e.key),
		r = e.ctrlKey && ("U" === e.key || "u" === e.key);
	(t || n || d || l || i || r) && (customAlert("Content Protection", "Content is protected. Viewing the page source or using developer tools is disabled."), e.preventDefault())
});
console.log("scrt.js loaded");