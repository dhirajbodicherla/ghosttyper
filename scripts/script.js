$(document).ready(function(){
    less = {
        logLevel: 0
    }
    start();
    var level = [{
        f: 10,
        b: 2
    }];
});
function start(){

    $('body').css('visibility', 'visible');
    $('.title').addClass('animate');

    GT = $('.ghost-typer').ghostTyper({
        inputString: "",
        typeSpeed: 100,
        startDelay: 3000,
        autoStart: false,
        recordInput: $('.human-typer .textarea'),
        complete: function(data){
            // console.log('done', data);
            $('.buttons').show();
            $('.next-level-btn').show();
        },

    });

    $('.start-game-btn').click(function(e){
        e.preventDefault();

        GT.start();
        $('.buttons').hide();
        $('.start-game-btn').hide();
        $('.textarea').focus();
    });

    $('.next-level-btn').click(function(e){
        e.preventDefault();

        GT.nextLevel();
    });
}
