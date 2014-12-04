$(document).ready(function(){
    $('.typerContainer').ghostTyper({
        success: function(data){

        }
    });
});

! function($) {

    "use strict";

    var GhostTyper = function(el, options){

        this.$el = $(el);
        this.sentence = this.$el.html();
        this.$el.html('');
        this.typerWord = '';
        this.arrayPos = 0;
        this.input = $('<span></span>').attr('id', 'typer').addClass('text');
        this.cursor = $('<span>|</span>').css({
            'font-size': '30px',
            'line-height': '0.8',
            'position': 'absolute'
        }).addClass('ghosttyper-cursor');
        this.$el.append(this.input).append(this.cursor);
        var self = this;
        this.typerTimer = setInterval(function(){
            if(self.arrayPos == self.sentence.length) {
                clearInterval(self.typerTimer);
                return;
            }
            self.typerWord += self.sentence[self.arrayPos];
            self.input.html(self.typerWord);
            self.arrayPos++;
        }, 20);
    };

    GhostTyper.prototype = {

    };
    $.fn.ghostTyper = function(option){
        return this.each(function(){
            var $this = $(this),
                data = new GhostTyper(this, option);
        });
    };
}(window.jQuery);