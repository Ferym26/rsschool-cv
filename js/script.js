const ready = (callback) => {
	document.readyState != 'loading' ? callback() : document.addEventListener('DOMContentLoaded', callback);
}

const log = () => {
	const taskArr = []; // массив объектов с заданиями
	const taskList = [
		{
			task: 'вёрстка валидная',
			value: 10,
		},
		{
			task: 'вёрстка семантическая',
			value: 20,
		},
		{
			task: 'для оформления СV используются css-стили',
			value: 10,
		},
		{
			task: 'контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы',
			value: 10,
		},
		{
			task: 'вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется',
			value: 10,
		},
		{
			task: 'есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным.',
			value: 10,
		},
		{
			task: 'на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым)',
			value: 10,
		},
		{
			task: 'контакты для связи и перечень навыков оформлены в виде списка ul > li',
			value: 10,
		},
		{
			task: 'CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского',
			value: 10,
		},
		{
			task: 'CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода.',
			value: 10,
		},
		{
			task: 'CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий.',
			value: 10,
		},
		{
			task: 'CV выполнено на английском языке',
			value: 10,
		},
		{
			task: 'выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт)',
			value: 0,
		},
		{
			task: 'есть видеорезюме автора CV на английском языке',
			value: 0,
		},
		{
			task: 'дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию',
			value: 10,
		},
	]; // список заданий со значениями самооценки
	// конструктор строки задания
	function Row (task, value) {
		this.task = task;
		this.value = value;
	};
	// наполняем массив
	taskList.forEach((item) => {
		taskArr.push(new Row(item.task, item.value))
	});
	// считаем сумму значений
	const calcSumm = () => {
		let summ = 0;
		taskArr.forEach((item) => {
			summ += item.value
		})
		return summ
	};
	// выводим в консоль таблицу списка заданий и вычислинный результат
	console.table([...taskArr, new Row('Итого', calcSumm())]);
}

const mobileMenu = () => {
	const btnOpenMenu = document.querySelector('.js_cv-menu__open');
	const overlay = document.querySelector('.js_overlay');
	const menu = document.querySelector('.js_menu');
	const links = menu.querySelectorAll('.cv-menu__link');
	const body = document.querySelector('body');
	const closeMenu = () => {
		body.classList.remove('fixed');
		overlay.classList.add('is-hidden');
		menu.classList.add('is-hidden');
	}
	const toggleMenu = () => {
		body.classList.toggle('fixed');
		overlay.classList.toggle('is-hidden');
		menu.classList.toggle('is-hidden');
	}
	btnOpenMenu.addEventListener('click', toggleMenu);
	overlay.addEventListener('click', closeMenu);
	links.forEach((link) => {
		link.addEventListener('click', closeMenu);
	});
}

const highlight = () => {
	hljs.initHighlightingOnLoad()
}

ready(() => {
	log();
	mobileMenu();
	highlight();
});