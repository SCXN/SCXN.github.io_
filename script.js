// Button close Navigator menu (V1 buggy)
let buttons = document.getElementsByClassName('navButtons');
let obscured = document.getElementById('obscuro');

for(let i=0; i<buttons.length; i++){
    buttons[i].onclick=function(){
        if(document.querySelector('nav ul li ul').style.display == "grid"){
            document.querySelector('nav ul li ul').style.display = "none";
            buttons[0].innerHTML = "&#9776; Menu";
        } else {
            document.querySelector('nav ul li ul').style.display = "grid";
            buttons[0].innerHTML = "&times;Close";
        }
    }
}
for(let i=0; i<buttons.length; i++){
    buttons[i].onmouseover=function(){
        if(buttons[0].innerHTML=="&#9776; Menu"){
            buttons[0].innerHTML= "&#9776; Menu";
            document.getElementById('obscuro').classList.toggle('obscuro');
        } else {
            buttons[0].innerHTML= "&times;Close";
        }
    }
    buttons[i].onmouseout=function(){
        if(buttons[0].innerHTML=="&times;Close"){
            buttons[0].innerHTML= "&times;Close";
            document.getElementById('obscuro').classList.add('obscuro');
        } else {
            buttons[0].innerHTML= "&#9776; Menu";
        }
    }   
}
