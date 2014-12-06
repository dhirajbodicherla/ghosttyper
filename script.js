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
        typeSpeed: 20,
        autoStart: false,
        success: function(data){
            console.log('done');
        }
    });

    $('.start-game').click(function(){
        
    })
}