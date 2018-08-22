    var textToShow = ['text1', 'text2', 'text3', 'text4']
    $(document).ready(function() {
        $("h4").html(textToShow[Math.floor(Math.random()*textToShow.length)]);
    });