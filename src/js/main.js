//preloader
window.addEventListener('load', () => {
  document.querySelector('.preloader').classList.add('opacity');
  setTimeout(function () {
    document.querySelector('.preloader').style.display = 'none';
  }, 1000)
})

//colorTheme
const body = document.body;
const main = document.querySelector('.main')
const themeBtn = document.querySelector('.color')
const themeBtnIcon = document.querySelector('.color i')
const themeRed = document.querySelector('.theme-red')
const themeBlue = document.querySelector('.theme-blue')
const themeGreen = document.querySelector('.theme-green')
const themePink = document.querySelector('.theme-pink')
const themeOrange = document.querySelector('.theme-orange')

const themeDark = document.querySelector('.color__theme-dark')

themeBtnIcon.addEventListener('click', () => {
  themeBtn.classList.toggle('active');
})

themeDark.addEventListener('click', () => {
  themeDark.classList.toggle('active');
  main.classList.toggle('dark');
})

function changeTheme(color) {
  body.className = '';
  body.classList.add(color);
}


//lightbox

const portfolioItems = document.querySelectorAll('.portfolio__item');
const portfolioItemsInner = document.querySelectorAll('.portfolio__item-inner');
const portfolioTitle = document.querySelectorAll('.portfolio__info-title');

const lightbox = document.querySelector('.lightbox');
const lightboxClose = document.querySelector('.lightbox__close');
const lightboxImg = document.querySelector('.lightbox__img');
const lightboxTitle = document.querySelector('.lightbox__title');
const lightboxDescription = document.querySelector('.lightbox__description');
const lightboxCounter = document.querySelector('.lightbox__counter');
const lightboxPrev = document.querySelector('.lightbox__controls-prev');
const lightboxNext = document.querySelector('.lightbox__controls-next');

let count = 0;

for (let i = 0;i < portfolioItems.length;i++) {
  portfolioItemsInner[i].addEventListener('click', () => {
    count = i;
    toggleLightbox();
    changeItem();
  })
}

function toggleLightbox() {
  lightbox.classList.add('open');
}

function changeItem() {
  let imgSrc = portfolioItems[count].querySelector('img').getAttribute('src');
  lightboxImg.src = imgSrc;
  lightboxTitle.innerHTML = portfolioItems[count].querySelector('h4').innerHTML + ' - перейти на сайт';
  lightboxTitle.href = portfolioItems[count].querySelector('a').getAttribute('href');
  lightboxDescription.innerHTML = portfolioItems[count].querySelector('p').innerHTML;
  lightboxCounter.innerHTML = `${count + 1} из ${portfolioItems.length}`;
  console.log(portfolioItems[count].querySelector('a').getAttribute('href'));
  
}

lightboxNext.addEventListener('click', () => {
  if (count === portfolioItems.length - 1) {
    count = 0;
  } else {
    count++;
  }
  changeItem();
})

lightboxImg.addEventListener('click', () => {
  if (count === portfolioItems.length - 1) {
    count = 0;
  } else {
    count++;
  }
  changeItem();
})

lightboxPrev.addEventListener('click', () => {
  if (count === 0) {
    count = portfolioItems.length - 1;
  } else {
    count--;
  }
  changeItem();
})

//closeLightbox

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('open');
})

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('open');
  }
})

//linkMenu & moveSection

  const menuLink = document.querySelectorAll('.aside__item-link');
  const menuItem = document.querySelectorAll('.aside__item');
  const section = document.querySelectorAll('.section');
  section.forEach(item => {
    item.classList.add('fixed');
  })
  for (let i = 0;i < menuLink.length;i++) {
    menuLink[i].addEventListener('click', function () {
      removeBackSectionClass();
      for (let k = 0;k < menuLink.length;k++) {
        if (menuItem[k].querySelector('a').classList.contains('active')) {
          addBackSectionClass(k);
        }
        menuLink[k].classList.remove('active');
      }
      this.classList.add('active');

      showSection(this);

    })
  }
  function removeBackSectionClass() {
    section.forEach(item => {
      item.classList.remove('back-section');
    })
  }
  function addBackSectionClass(num) {
    section[num].classList.add('back-section');
  }
  function showSection(element) {

    let href = element.getAttribute('href').split('#')[1];

    section.forEach(item => {
      item.classList.remove('active');
    })

    document.querySelector("#" + href).classList.add('active');

  }


//hireMe
function updateNav(element) {
  for (let k = 0;k < menuLink.length;k++) {
    menuLink[k].classList.remove('active');
    let target = element.getAttribute('href').split('#')[1];
    if (target === menuLink[k].getAttribute('href').split('#')[1]) {
      menuLink[k].classList.add('active');
    }
  }
}

document.querySelector('.hire-me').addEventListener('click', function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
})


