!(function($) {

    var kannstemachen = $('<div style="background-color: red;height:160px;width: 110px;box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.3);display:none;position:absolute;top:10px;right:10px;z-index:999999999;"><p style="text-transform: uppercase; font-size:14px; color: #fff; line-height: 14px; font-weight: bold; padding:8px;margin:0;font-family: Arial, Helvetica, Sans, Sans-Serif, \'Sans Serif\';">Das<br>kannste<br>schon<br>so<br>machen,<br>aber<br>dann<br>isses<br>halt<br>kacke.</p></div>');

    $.fn.kannstemachen = function() {
        return this.each(function() {
            $(this).on('mouseenter', function(e) {

                var css = {},
                    x = e.pageX,
                    y = e.pageY,
                    w = $(window),
                    ww = w.width(),
                    wh = w.height(),
                    top = ((wh/2)-150);

                if (x < (ww/2)) // left half of the screen
                {
                    css.left = (x+5)+'px';
                    css.right = '';
                }
                else
                {
                    css.right = (ww-x-5)+'px';
                    css.left = '';
                }

                if (y < (wh/2)) // upper half of the screen
                {
                  css.top = (y+5)+'px';
                  css.bottom = '';
                }
                else
                {
                  css.top = '';
                  css.bottom = (wh-y-5)+'px';
                }

                kannstemachen
                    .stop(true, true)
                    .css(css)
                    .fadeIn(250);
            });
            $(this).on('mouseleave', function() {
                kannstemachen
                    .stop(true, false)
                    .fadeOut(500);
            });
        });
    };

    $(function(){
        $('body').append(kannstemachen);
        $('.kannstemachen').kannstemachen();
    });
})(jQuery);