dateGruop.addEventListener('click', function() {//Подмена поля "Год рождения"
    if(datWB.hasAttribute('hidden')){
        datWB.removeAttribute('hidden');
        falsdatWB.setAttribute('hidden', 'hidden');
        datWB.focus();
    }
})

let onTop = document.getElementById('top');
buttTop.addEventListener('click', function(e) {//Плавная прокрутка наверх
    e.preventDefault();
    onTop.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
})
window.addEventListener('scroll', function() {//Появление/пропадание кнопки "Наверх"
    buttTop.hidden=(pageYOffset<
    document.documentElement.clientHeight / 2);
});

const anchors = getComputedStyle(sandwich).display === 'none' ? navUl.querySelectorAll('a[href*="#"]'): navUlm.querySelectorAll('a[href*="#"]');
for(let anchor of anchors){
    anchor.addEventListener('click', function(e){//Плавная прокрутка по клику на ссылки в навигации хейдера
    const namesId = anchor.getAttribute('href').substr(1);
    let idName=document.getElementById(namesId);
    e.preventDefault();
    if(getComputedStyle(sandwich).display === 'block') {hiddenShow ();}
    idName.scrollIntoView({
    behavior: 'smooth',
    block: 'start'});
    });
}
sandwich.addEventListener('click', hiddenShow);//Скыть/показать мобильную панель навигации

function hiddenShow () {
if(getComputedStyle(showMenu).display =='none') {showMenu.style.display = 'block';}
    else{showMenu.style.display = 'none';}
}