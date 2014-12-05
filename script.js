$(document).ready(function(){
    less.pageLoadFinished.then(
        function() {
            $('body').show();
        }
    )
    $('.title').addClass('animate');
    GT = $('.ghost-typer').ghostTyper({
        inputString: "",
        difficulty: 2,
        human: $('#human-typer textarea'),
        success: function(data){
            console.log('done');
        }
    });
});