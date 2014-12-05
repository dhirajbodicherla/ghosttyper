;(function($) {

    "use strict";

    var GhostTyper = function(el, options){
        this.el = $(el);
        this.defaultOptions = {
            difficulty: 5,
            showCursor: true,
            backspaceCount: 0,
            success : function() {},
            start: function() {}
        }
        this.el.data("GhostTyper", this);
        this.options = $.extend({}, this.defaultOptions, options);
        this.inputString = ($.trim(this.options.inputString)) ? this.options.inputString : this.el.html();
        this.typer = $('<span></span>').attr('id', 'typer').addClass('text');
        this.el.html('');
        this.typerWord = '';
        this.arrayPos = 0;
        this.showCursor = this.options.showCursor;
        this.typeSpeed = (10-this.options.difficulty) * 30;
        this.letterCount = this.inputString.length;
        // this.
        this._start();
    };

    GhostTyper.prototype = {
        _start: function(){
            this._setup();
        },
        _setup: function(){
            this.el.append(this.typer);
            if(this.options.showCursor === true){
                this.cursor = $('<span>|</span>').css({
                    'font-size': '30px',
                    'line-height': '0.8',
                    'position': 'absolute'
                }).addClass('ghosttyper-cursor');
                this.el.append(this.cursor);
            }
            this._type();
        },
        _type: function(){
            var self = this;
            this.typerTimer = setInterval(function(){
                if(self.arrayPos == self.letterCount) {
                    clearInterval(self.typerTimer);
                    self.options.success();
                    return;
                }
                self.typerWord = self.inputString.substring(0, self.arrayPos);
                self.typer.html(self.typerWord);
                self.arrayPos++;
            }, this.typeSpeed);
        },
        _backspace: function(){
            alert('no lah');
        },
        seriously: function(){
            alert('hell yeah');
        }
    };

    $.fn.ghostTyper = function(options){

        return this.each(function(){
            // var $this = $(this),
            //     data = $this.data('GhostTyper'),
            //     options = typeof option == 'object' && option;
            // if (!data) $this.data('GhostTyper', new GhostTyper(this, options));
            // if (typeof option == 'string') data[option]();
            if(!$.data(this, 'GhostTyper')){
                $.data(this, 'GhostTyper', new GhostTyper(this, options));
            }
        });
    };
  }(window.jQuery));