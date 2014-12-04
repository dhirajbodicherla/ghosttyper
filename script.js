$(document).ready(function(){
    var inputContainer = $('#typerContainer');
    var sentence = inputContainer.html();
    inputContainer.html('');
    var typerWord = '', i=0;
    var input = $('<span></span>').attr('id', 'typer').addClass('text');
    var blinkingCursor = $('<span>|</span>').css({
        'font-size': '30px',
        'line-height': '0.8',
        'position': 'absolute'
    }).addClass('typed-cursor');
    inputContainer.append(input).append(blinkingCursor);
    var typerTimer = setInterval(function(){
        if(i == sentence.length) {
            clearInterval(typerTimer);
            return;
        }
        typerWord += sentence[i];
        input.html(typerWord);
        i++;
    }, 20);
});
