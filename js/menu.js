const iconMenu = document.querySelector('.header__burger');
if(iconMenu){
	const headerMenu = document.querySelector('.header__elem-wrapper');
	iconMenu.addEventListener("click", function(e){
		iconMenu.classList.toggle('active');
		headerMenu.classList.toggle('active');
	});
}

const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if(menuLinks.length>0){
	menuLinks.forEach(menuLink=>{
		menuLink.addEventListener("click",onMenuLinkClick);
	});
	function onMenuLinkClick(e){
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top+pageYOffset-document.querySelector('header').offsetHeight;
		
			window.scrollTo({
				top:gotoBlockValue,
				behavior:"smooth"
			});
			e.preventDefault();
		}
	}
}