//POPUP MUSICA

let musicAbierto = false;
let contactoAbierto = false;
let blogAbierto = false;
let showsAbierto = false;

document.getElementById('musicaid').addEventListener('click',function() {
    if (musicAbierto == false) {document.querySelector('.blog__popup').style.display = 'none';
        document.querySelector('.contacto__popup').style.display = 'none';
        document.querySelector('.music__popup').style.display = 'inline';
        musicAbierto = true;
    } else {
        document.querySelector('.music__popup').style.display = 'none';
        musicAbierto = false;
    }
});


document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.music__popup').style.display = 'none';
});







//POPUP CONTACTO

document.getElementById('contactoid').addEventListener('click',function() {
    if (contactoAbierto == false) {document.querySelector('.blog__popup').style.display = 'none';
        document.querySelector('.music__popup').style.display = 'none';
        document.querySelector('.contacto__popup').style.display = 'flex';
        contactoAbierto = true;
        musicAbierto = false;
    } else {
        document.querySelector('.contacto__popup').style.display = 'none';
        contactoAbierto = false;
    }        
});


document.querySelector('.closecontact').addEventListener('click',function(){
    document.querySelector('.contacto__popup').style.display = 'none';
});








//POPUP BLOG
document.getElementById('blogid').addEventListener('click',function() {
    if (blogAbierto == false) {document.querySelector('.contacto__popup').style.display = 'none';
        document.querySelector('.music__popup').style.display = 'none';
        document.querySelector('.blog__popup').style.display = 'block';
        blogAbierto = true;
        musicAbierto = false;
        contactoAbierto = false;
    } else {
        document.querySelector('.blog__popup').style.display = 'none';
        blogAbierto = false;
    }
});



//DL4LOOP
var myLoop = document.getElementById("harryPotter");
var icon = document.getElementById("dl4id");

icon.onclick = function() {
    if(myLoop.paused) {
        myLoop.play(); 
    } else {
        myLoop.pause();
    }
}


var hp = document.getElementById("dl4loop");
var iconhp = document.getElementById("iconlogo");

iconhp.onclick = function() {
    if(hp.paused) {
        hp.play();
    } else {
        hp.pause();
    }
    
}


// document.getElementById(pbio).innerHTML = new HTML

