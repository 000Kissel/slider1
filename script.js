// 1

let images = ['url1.jpg', 'utl2.jpg', 'url3.jpg'];

// 2

let slider = document.querySelector('#slider');
let indicatorList = document.querySelector('#indicatorList')
let indicators

// 3

for (let i = 1; i < 3; i++) {
    li = document.createElement('li')
    indicatorList.appendChild(li)
    li.classList.add('indicator')
}

// 4

let indicator = document.querySelectorAll('.indicator');

// 5

i = 0
slider.src = `img/${images[0]}`;
indicators[0].style.borderColor = 'red';

// 6

let btnLeft = document.querySelector('#left');
let btnRight = document.querySelector('#right');
btnLeft.addEventListener('click', () => {
    e.preventDefault();
    prev();
})
btnRight.addEventListener('click', () => {
    e.preventDefault();
    next();
})

// 7

function prev() {
    i = i - 1
    if (i < 0) {
        i = images.length - 1;
    }
    slider.src = `img/${images[i]}`;

    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';
        indicators[i].style.borderColor = 'red'
    }

}

// 8

function next() {
    i = i + 1
    if (i > images.length - 1) {
        i = 0
    }


}






