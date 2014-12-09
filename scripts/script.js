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
        typeSpeed: 10,
        startDelay: 3000,
        autoStart: false,
        recordInput: $('.human-typer .textarea'),
        complete: function(data){
            console.log('done', data);
        },

    });

    $('.btn').click(function(e){
        e.preventDefault();

        GT.start();
        $(this).parents('.human-typer').find('.start-game').hide();
        $(this).parents('.human-typer').find('.textarea').focus();
    })
}
