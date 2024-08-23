"use strict";
const Shuffle = function (t, e) {
		let n = "*?>7YX&S,W[^PL5NQT89B+K{E)-J.O$D%/<}RGU3~]4@IZA(C612!MFV=H0#`\\|".split(""),
			l = t,
			s = e,
			r = 0,
			i,
			o,
			a = function (t) {
				let e = "";
				for (let l = 0; l < t; l++) e += n[Math.floor(Math.random() * n.length)];
				return e;
			};
		(this.start = function () {
			(l.style.display = "none"),
			(s.style.display = "block"),
			(i = window.setInterval(() => {
				r <= l.innerText.length && (s.innerText = l.innerText.substring(0, r) + a(l.innerText.length - r));
			}, 64)),
			(o = window.setInterval(() => {
				r > l.innerText.length - 1 && this.stop(), r++;
			}, 128));
		}),
		(this.stop = function () {
			(l.style.display = "block"),
			(s.style.display = "none"),
			(s.innerText = ""),
			(r = 0),
			void 0 !== i && (window.clearInterval(i), (i = void 0)),
				void 0 !== o && (window.clearInterval(o), (o = void 0)),
				window.setTimeout(() => {
					this.start();
				}, 7500);
		});
	},
	sourceEl = document.getElementById("source"),
	targetEl = document.getElementById("target");
new Shuffle(sourceEl, targetEl).start();
console.log("scramble.js loaded");