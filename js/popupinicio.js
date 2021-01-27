var menu = document.querySelector('.main');
var popupMain = document.getElementById('popup-main');

menu.addEventListener('click', function(){
    popupMain.classList.toggle('active-popup-main');
});