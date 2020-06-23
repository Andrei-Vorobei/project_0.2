const accordion = (triggersSelector) => {
	const btns = document.querySelectorAll(triggersSelector);

	btns.forEach(btn => {
		btn.addEventListener('click', function() {
			if (!this.classList.contains('active-style')) {
				btns.forEach(btn => {
					btn.classList.remove('active-style');
					btn.nextElementSibling.classList.remove('active-content');
				});
			}

			this.classList.toggle('active-style');
			this.nextElementSibling.classList.toggle('active-content');
		});
	});
};

export default accordion;