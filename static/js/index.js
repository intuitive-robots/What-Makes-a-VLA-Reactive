window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Method rollout tabs: show one pane at a time, play only its videos.
    function playPane($pane) {
        $pane.find('video').each(function() {
            this.currentTime = 0;
            var p = this.play();
            if (p && p.catch) { p.catch(function() {}); }
        });
    }

    $('.method-tabs li').on('click', function() {
        var $tab = $(this);
        if ($tab.hasClass('is-active')) { return; }
        $('.method-tabs li').removeClass('is-active');
        $tab.addClass('is-active');
        $('.method-pane.is-active').removeClass('is-active')
            .find('video').each(function() { this.pause(); });
        var $pane = $('#' + $tab.data('target')).addClass('is-active');
        playPane($pane);
    });

    playPane($('.method-pane.is-active'));

})
