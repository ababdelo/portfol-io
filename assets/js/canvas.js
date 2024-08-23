const canvas = document.getElementById("canvas1"),
	ctx = canvas.getContext("2d");
(canvas.width = window.innerWidth), (canvas.height = window.innerHeight);
let particlesArray;
const baseColor = "75, 75, 75";
class Particle {
	constructor(t, i, r, a, e, c) {
		(this.x = t), (this.y = i), (this.directionX = r), (this.directionY = a), (this.size = e), (this.color = c);
	}
	draw() {
		ctx.beginPath(), ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1), (ctx.fillStyle = this.color), ctx.fill();
	}
	update() {
		(this.x > canvas.width || this.x < 0) && (this.directionX = -this.directionX), (this.y > canvas.height || this.y < 0) && (this.directionY = -this.directionY), (this.x += this.directionX), (this.y += this.directionY), this.draw();
	}
}

function init() {
	particlesArray = [];
	let t = (canvas.height * canvas.width) / 45e3;
	for (let i = 0; i < t; i++) {
		let r = 5 * Math.random() + 1,
			a = Math.random() * (innerWidth - 2 * r) + 2 * r,
			e = Math.random() * (innerHeight - 2 * r) + 2 * r,
			c = 5 * Math.random() - 2.5,
			s = 5 * Math.random() - 2.5,
			n = `rgba(${baseColor}, 1)`;
		particlesArray.push(new Particle(a, e, c, s, r, n));
	}
}

function connect() {
	for (let t = 0; t < particlesArray.length; t++)
		for (let i = t; i < particlesArray.length; i++) {
			let r = (particlesArray[t].x - particlesArray[i].x) * (particlesArray[t].x - particlesArray[i].x) + (particlesArray[t].y - particlesArray[i].y) * (particlesArray[t].y - particlesArray[i].y);
			if (r < (canvas.width / 9) * (canvas.height / 9)) {
				let a = 1 - r / 15e3;
				(ctx.strokeStyle = `rgba(${baseColor}, ${a})`), (ctx.lineWidth = 2), ctx.beginPath(), ctx.moveTo(particlesArray[t].x, particlesArray[t].y), ctx.lineTo(particlesArray[i].x, particlesArray[i].y), ctx.stroke();
			}
		}
}

function animate() {
	requestAnimationFrame(animate), ctx.clearRect(0, 0, innerWidth, innerHeight);
	for (let t = 0; t < particlesArray.length; t++) particlesArray[t].update();
	connect();
}
window.addEventListener("resize", function () {
		(canvas.width = window.innerWidth), (canvas.height = window.innerHeight), init();
	}),
	init(),
	animate();
console.log("canvas.js loaded");