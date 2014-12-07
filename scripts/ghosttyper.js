;(function($){
    $.fn.ghostTyper = function(options) {
        // support multiple elements
        if (this.length > 1){
            this.each(function() { $(this).ghostTyper(options); });
            return this;
        }

        var GhostTyper = function(el, options){
            this.el = $(el);
            this.defaultOptions = {
                typeSpeed: 50,
                showCursor: true,
                backspaceCount: 0,
                autoStart: true,
                startDelay: 0,
                success : function() {},
                start: function() {}
            };
            this.options = $.extend({}, this.defaultOptions, options);
            this.inputString = ($.trim(this.options.inputString)) ? this.options.inputString : this.el.html();
            this.typer = $('<span></span>').attr('id', 'typer').addClass('text');
            this.el.html('');
            this.typerWord = '';
            this.arrayPos = 0;
            this.letterCount = this.inputString.length;
            this.typerTimer = '';
            if(this.options.autoStart) this._setup();
        };

        GhostTyper.prototype = {
            constructor: GhostTyper,

            _start: function(){
                if(isTyping) return;
                this._setup();
                isTyping = true;
            },
            _setup: function(){
                var self = this;
                this.el.append(this.typer);
                if(this.options.showCursor === true){
                    this.cursor = $('<span>|</span>').css({
                        'font-size': '30px',
                        'line-height': '0.8',
                        'position': 'absolute'
                    }).addClass('ghosttyper-cursor');
                    this.el.append(this.cursor);
                }
                setTimeout(function(){
                    self._type();
                }, this.options.startDelay);
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
                }, this.options.typeSpeed);
            },
            _backspace: function(){
                var self = this;
                this.typerTimer = setInterval(function(){
                    if(self.arrayPos == -1) {
                        clearInterval(self.typerTimer);
                        return;
                    }
                    self.typerWord = self.inputString.substring(0, self.arrayPos-1);
                    self.typer.html(self.typerWord);
                    self.arrayPos--;
                }, this.options.typeSpeed);
            },
            _pause: function(){
                if(!isTyping) return;
                clearInterval(this.typerTimer);
                isTyping = false;
            },
            _resume: function(){
                if(isTyping) return;
                this._type();
                isTyping = true;
            },
            _setTypeSpeed: function(typeSpeed){
                this.options.typeSpeed = typeSpeed;
                this._pause();
                this._resume();
            },
            _getTypeSpeed: function(){
                return this.options.typeSpeed;
            }
        };

        // private variables
        var instance;
        var isTyping = false;
        var self = this;
        
        var setup = function(){
            instance = new GhostTyper(self, options);
            return self;
        };

        /* 
        // private methods
        var foo = function() {
            
        }
        */

        /*  
         * Public methods (API)
         */

        this.start = function(){
            instance._start();
            return this;
        };
        this.pause = function(){
            instance._pause();
            return this;
        };
        this.resume = function(){
            instance._resume();
            return this;
        };
        this.setTypeSpeed = function(typeSpeed){
            instance._setTypeSpeed(typeSpeed);
            return this;
        };
        this.getTypeSpeed = function(){
            return instance._getTypeSpeed();
        };
        this.isTyping = function(){
            return instance._isTyping();
        };
        this.backspace = function(){
            return instance._backspace();
        }

        // return (function() {
        //     instance = new GhostTyper(self, options);
        //     return self;
        // })();
        // this.each(function(){
        //     console.log(this);
        // })
        return this.each(function() {
            instance = new GhostTyper(self, options);
            return self;
        });
        
        // if (this.length > 1){
        //     this.each(function() { $(this).ghostTyper(options) });
        //     return this;
        // }

        // return this.each(function() {
        //     // instance = new GhostTyper(self, options);
        //     instance = new GhostTyper(this, options);
        //     console.log('returning ', instance, this);
        //     return this;
        //     // return self.apply(instance);
        //     // return instance.apply(self);
        //     // return setup();
        // });

    };
})(jQuery);