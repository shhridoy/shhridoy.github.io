(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#ff9800", cursorwidth: '8', cursorborderradius: '10px', background: 'rgba(66, 79, 99, 0.6)', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

    $(".scrollbar1").niceScroll({styler:"fb",cursorcolor:"rgba(97, 100, 193, 0.78)", cursorwidth: '6', cursorborderradius: '0',autohidemode: 'false', background: '#F1F1F1', spacebarenabled:false, cursorborder: '0'});

    $(".scrollbar1").getNiceScroll();
    if ($('body').hasClass('scrollbar1-collapsed')) {
        $(".scrollbar1").getNiceScroll().hide();
    }
    
  
//---------------- For Accordian
  jQuery(document).ready(function() {
                        function close_accordion_section() {
                            jQuery('.accordion .accordion-section-title').removeClass('active');
                            jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
                        }

                        jQuery('.accordion-section-title').click(function(e) {
                            // Grab current anchor value
                            var currentAttrValue = jQuery(this).attr('href');

                            if (jQuery(e.target).is('.active')) {
                                close_accordion_section();
                            } else {
                                close_accordion_section();

                                // Add active class to section title
                                jQuery(this).addClass('active');
                                // Open up the hidden content panel
                                jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
                            }

                            e.preventDefault();
                        });
                    });     
    
    
// -----------------------  Circle Js
    
    var colors = [
            ['#ffffff', '#fd9426'],
            ['#ffffff', '#fc3158'],
            ['#ffffff', '#53d769'],
            ['#ffffff', '#147efb']
        ];
        for (var i = 1; i <= 7; i++) {
            var child = document.getElementById('circles-' + i),
                percentage = 30 + (i * 10);

            Circles.create({
                id: child.id,
                percentage: percentage,
                radius: 80,
                width: 10,
                number: percentage / 1,
                text: '%',
                colors: colors[i - 1]
            });
        }
    

    

    

})(jQuery);

                     
     
  