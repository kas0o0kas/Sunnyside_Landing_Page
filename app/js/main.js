window.onload = function (){
    var hamburger = document.querySelector(".header__hamburger");
    var menu = document.querySelector(".header__menu");
    hamburger.addEventListener('click', function(event){
        //close menu
        if(!menu.classList.contains('fade_in')){
            menu.classList.remove('fade_out');
            menu.classList.add('fade_in');
        }
        //open menu
        else {
            menu.classList.remove('fade_in');
            menu.classList.add('fade_out');
        }
    })
}