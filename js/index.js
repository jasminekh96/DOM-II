// Your code goes here
const funBus = document.querySelector('img');
console.log(funBus);

funBus.addEventListener('mouseenter', () => {
	funBus.style.transform = 'scale(1.2';
	funBus.style.transition = 'all 0.3s';
});
funBus.addEventListener('mouseleave', () => {
	funBus.style.transform = 'scale(1.0';
	funBus.style.transition = 'all 0.5s';
});

const body = document.querySelector('body');
body.addEventListener('click', () => {
	body.style.backgroundColor = '#FFA07A';
});
const home = document.querySelector('.home');
home.addEventListener('click', (e) => {
	home.style.backgroundColor = '#FF7F50';
	console.log(body);
	e.stopPropagation();
});

TweenMax.to('img', 1, {
	rotation : 360,
	x        : 50,
	y        : 20,
	ease     : Elastic.easeOut.config(1, 0.75),
});

TweenMax.to('h2', 1, {
	x    : 300,
	y    : 0,
	ease : Elastic.easeOut.config(1, 0.75),
});

const boxes = document.querySelectorAll('h2');
boxes.forEach((box) => {
	box.addEventListener('mouseover', (e) => {
		TweenMax.to(e.target, 0.5, {
			scale  : 1.3,
			filter : 'none',
			ease   : Elastic.easeOut.config(1, 0.75),
			yoyo   : true,
			repeat : 1,
		});
	});
});

const bottomHeader = document.querySelectorAll('h4');
bottomHeader.forEach((box) => {
	box.addEventListener('mouseover', (e) => {
		TweenMax.to(e.target, 0.5, {
			scale  : 1.3,
			filter : 'none',
			ease   : Elastic.easeOut.config(1, 0.75),
			yoyo   : true,
			repeat : 1,
		});
	});
});
TweenMax.to('h4', 1, {
	rotation : 360,
	x        : 120,
	y        : 100,
	ease     : Elastic.easeOut.config(1, 1.75),
});

document.querySelectorAll('.main-navigation').forEach((el) => {
	el.addEventListener('click', () => {
		el.style.backgroundColor = '#9370DB';
	});
});

TweenMax.to('body', 1, {
	rotation : 360,
	x        : 120,
	y        : 100,
	ease     : Elastic.easeOut.config(1, 1.75),
});
TweenMax.to('.btn', 5, {
	rotation : 360,
	ease     : Elastic.easeOut.config(1, 0.75),
});

TweenMax.to('.nav-link', 5, {
	rotation : 80,
	x        : 100,
	ease     : Elastic.easeOut.config(1, 0.75),
});

const changeImg = document.querySelector('img');
window.addEventListener('scroll', () => {
	(changeImg.src = 'img/dog.png'), console.log(changeImg);
});

const imgChange = document.querySelectorAll('img');
imgChange.forEach((i, index) =>
	i.addEventListener('dblclick', () => {
		if (index === 1) i.src = 'img/groupdogs.png';
		if (index === 2) i.src = 'img/adventure.png';
		if (index === 3) i.src = 'img/destination.png';
	}),
);

const stopLink = document.querySelector('nav');
stopLink.addEventListener('click', (event) => {
	console.log('stopped link');
	event.preventDefault();
});
