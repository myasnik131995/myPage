// Бургер меню
let btn = document.getElementById('head-mn-brg');
let menu = document.getElementById('head-mn-mbl');
let lineOne = document.getElementById('line-one');
let lineTwo = document.getElementById('line-two');
let lineThree = document.getElementById('line-three');
let Overlay = document.getElementById('overlay');

btn.onclick = function(){
  lineOne.classList.toggle('header_menu_burger_line_one_active');
  lineTwo.classList.toggle('header_menu_burger_line_two_active');
  lineThree.classList.toggle('header_menu_burger_line_three_active');
  menu.classList.toggle('header_menu_mobile_active');
  Overlay.classList.toggle('header_menu_mobile_overlay_active');
};

Overlay.onclick = function(){
  menu.classList.toggle('header_menu_mobile_active');
  Overlay.classList.toggle('header_menu_mobile_overlay_active');
};


// Активный класс в меню при скролле

window.addEventListener('scroll', ()=>{
  let scrollDistance  = window.scrollY;

  console.log(scrollDistance);

  document.querySelectorAll('.section').forEach((el, i) => {
    if(el.offsetTop - document.querySelector('.header_menu').clientHeight <= scrollDistance){
      document.querySelectorAll('.header_menu a').forEach((el)=>{
        if(el.classList.contains('active')){
          el.classList.remove('active');
        }
      });
      document.querySelectorAll('.header_menu li')[i].querySelector('a').classList.add('active');
    }

  });
});


// якорные ссылки
const anchors = document.querySelectorAll('a[href*="#"]').forEach(link =>{
  link.addEventListener('click', function(e){
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);
    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});



// ФУНКЦИЯ НА ВЫПОЛНЕНИЯ ИМИТАЦИИ ПЕЧАТАНИЯ ТЕКСТА
consoleText(['и я верстальщик', 'а также будущий WEB-разработчик', 'г. Санкт-Петербург',], 'text',['#fff','#fff']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'opening_console-underscore hidden';
      visible = false;

    } else {
      con.className = 'opening_console-underscore';

      visible = true;
    }
  }, 400);
}