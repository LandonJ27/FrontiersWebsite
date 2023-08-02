$(pong.css).ready(function(){
    var images=['pong background.png',
                'pong background3.jpg',];
    
    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';
    
    $('body').css({'background':bgImg, 'background-size':'cover', });
    
    });