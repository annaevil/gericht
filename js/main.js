const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1,
	autoplay: true,
	speed: 3000,
	effect: 'cube',
	on: {
	  slideChange: function () {
		let currentSlide = this.realIndex + 1;
		const counterItems = document.querySelectorAll('.counter-item');
		counterItems.forEach((counter, index) => {
		  if (index === currentSlide - 1) {
			counter.textContent = String(currentSlide).padStart(2, '0');
			counter.classList.add('animate-counter');
		  } else {
			counter.classList.remove('animate-counter');
		  }
		});
	  },
	},
  });
  
  setInterval(function () {
	swiper.slideNext();
  }, 3000);
  
  const swiperTeam = new Swiper('.swiper-team', {
	loop: true,
	slidesPerView: 1,
	autoplay: true,
	speed: 3000,
	
	// effect: 'flip',
	
  });

const video = document.getElementById('video');
const videoPlay = document.getElementById('video-icon');
const videoPause = document.getElementById('video-iconPause')

videoPlay.addEventListener('click', function() {
    if (video.paused) {
        video.play();
		videoPlay.style.display='none';
		videoPause.style.display='block';
    } else {
		video.pause();
	}
});

videoPause.addEventListener('click', () => {
	if (video.play) {
        video.pause();
		videoPlay.style.display='block';
		videoPause.style.display='none';
    } else {
		video.play();
	}
})

$(document).ready(function() {
	const itemsToShow = 3; 
	const $menuItems = $('.updates__menu-item');
	const $viewMoreBtn = $('.drinks__more');
  
	
	$menuItems.slice(itemsToShow).addClass('hidden');
  
	$viewMoreBtn.on('click', function(e) {
	  e.preventDefault();
  
	  // Находим скрытые новости и показываем следующие `itemsToShow` из них
	  $menuItems.filter('.hidden').slice(0, itemsToShow).removeClass('hidden');
  
	  if ($menuItems.filter('.hidden').length === 0) {
		$viewMoreBtn.hide();
	  }
	});
  });

  const swiperGalery = new Swiper('.swiper-galery', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: true,
	speed: 3000,
	
	// effect: 'flip',
	
  });



// window.addEventListener('scroll', function() {
//     let scrollButton = document.getElementById('scrollButton');
//     if (window.scrollY > 700) {
//         scrollButton.classList.add('show');
//     } else {
//         scrollButton.classList.remove('show');
//     }
// });



// document.getElementById("scrollButton").addEventListener("click", function() {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// });