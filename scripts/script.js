$(document).ready(function(){
    less = {
        logLevel: 0
    }
    start();
    
});
function start(){

    $('body').css('visibility', 'visible');
    $('.title').addClass('animate');

    GT = $('.ghost-typer').ghostTyper({
        inputString: "",
        typeSpeed: 500,
        startDelay: 3000,
        autoStart: false,
        success: function(data){
            console.log('done');
        }
    });

    $('.btn').click(function(e){
        e.preventDefault();

        GT.start();
        $(this).parents('.human-typer').find('.start-game').hide();
        $(this).parents('.human-typer').find('textarea').focus();
    })
}