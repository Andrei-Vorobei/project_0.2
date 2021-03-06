const sliders = (slides, dir, prev, next, ) => {
	let slideIndex = 1,
		paused = false;
	const items = document.querySelectorAll(slides),
			container = document.querySelector('.feedback');
	
	function showSlides(n) {
		if (n > items.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = items.length;
		}

		items.forEach(item => {
			item.classList.add('animated');
			item.style.display = 'none';
		});

		items[slideIndex - 1].style.display = 'block';

		container.style.overflow = 'hidden';
	}

	showSlides(slideIndex);

	function plusSlide(n) {
		showSlides(slideIndex += n);
	}

	try {
		const prevBtn = document.querySelector(prev),
				nextBtn = document.querySelector(next);

		prevBtn.addEventListener('click', () => {
			plusSlide(-1);
			items[slideIndex - 1].classList.remove('slideInRight');
			items[slideIndex - 1].classList.add('slideInLeft');
		});

		nextBtn.addEventListener('click', () => {
			plusSlide(1);
			items[slideIndex - 1].classList.remove('slideInLeft');
			items[slideIndex - 1].classList.add('slideInRight');
		});
	} catch(e){}

	function activateAnimation() {
		paused = setInterval(() => {
			if (dir === 'vertical') {
				plusSlide(1);
				items[slideIndex - 1].classList.add('slideInDown');
			} else {
				plusSlide(1);
				items[slideIndex - 1].classList.remove('slideInLeft');
				items[slideIndex - 1].classList.add('slideInRight');
			}
		}, 10000);
	}
	activateAnimation();

	items[0].parentNode.addEventListener('mouseenter', () => {
		clearInterval(paused);
	});
	
	items[0].parentNode.addEventListener('mouseleave', () => {
		activateAnimation();
	});
};

export default sliders;