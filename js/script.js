$('.tmbl').on('click', function (){
												$('.tmbl').removeClass("active");
												$(this).addClass("active");
								});
								
								$('.colors').each(function () {
												$(this).click(function () {
																let color = $(this).attr('data-color');
																document.documentElement.style.setProperty('--color', color)
												});
								});
								$('.colors').each(function () {
												$(this).click(function () {
																let color = $(this).attr('data-colorb');
																document.documentElement.style.setProperty('--colorb', color)
												});
								});
								
$(window).scroll(function () {
				$('.bg-scroll').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
				$('.txt-scroll').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).on("load", function (){				
$(".loadp").fadeOut("slow");
				});