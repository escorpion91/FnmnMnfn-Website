//POPUP MUSICA
document.getElementById('musicaid').addEventListener('click',function() {
    document.querySelector('.music__popup').style.display = 'inline';
});


document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.music__popup').style.display = 'none';
});



//POPUP CONTACTO
document.getElementById('contactoid').addEventListener('click',function() {
    document.querySelector('.contacto__popup').style.display = 'flex';
});


document.querySelector('.closecontact').addEventListener('click',function(){
    document.querySelector('.contacto__popup').style.display = 'none';
});




//POPUP BLOG
document.getElementById('blogid').addEventListener('click',function() {
    document.querySelector('.blog__popup').style.display = 'block';
});



//DL4LOOP
var myLoop = document.getElementById("dl4loop");
var icon = document.getElementById("dl4id");

icon.onclick = function() {
    if(myLoop.paused) {
        myLoop.play(); 
    } else {
        myLoop.pause();
    }
}