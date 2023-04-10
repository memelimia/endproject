// Code for sticky navbar

const nav = document.querySelector('#nav');
let topOfNav = nav.offsetTop;
let header = document.getElementById('header')

function fixNav(callMe) {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');

    } else {
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('load', fixNav)
window.addEventListener('scroll', fixNav);


// Multi choice image view whatever buttons
const elements = document.getElementsByClassName('column');

// One image view
/*function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
    console.log('i work');
}

// Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
    }
    console.log('i work too');
}

// Four images side by side
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
    console.log("i work four")
}*/

// Modal styling
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const span = document.getElementsByClassName('close')[0];

const image = document.querySelectorAll('.open-modal').forEach((i) => {
        
        i.addEventListener("click", (event) => {
            modal.style.display = "block"
            modalImg.src = event.target.src
        })
      
})

span.addEventListener('click', function () {
    modal.style.display = "none"
});


//Sidebar button for mobile view
//It fucks up desktop view

const openbutton = document.getElementById('storybutton')
const closebutton = document.getElementById('closestory')
const stories = document.getElementById('stories')


function openStory(width) {
    stories.style.width="350px"
    stories.style.padding="10px"
}
function closeStory(width) {
    stories.style.width="0"
    stories.style.padding="0"

}

let width = window.matchMedia("(max-width: 1050px)")
openStory(width)
closeStory(width)
width.addListener(openStory, closeStory)