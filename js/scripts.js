$(function(){
	var carouselList = $('#carousel ul');
	setInterval(changeSlide, 3000);
	function changeSlide (){
		carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
	}
	function moveFirstSlide(){
		var firstElement = carouselList.find('li:first');
		var lastElement = carouselList.find('li:last');
		lastElement.after(firstElement);
		carouselList.css({marginLeft:0});
		}
});
