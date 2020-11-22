'use strict';

// ***** NAVIGATION BAR CHANGE ON SCROLL *****

const header = document.querySelector("nav");
const sectionOne = document.querySelector(".top");
// var marginString = IntersectionObserver.rootMargin;
const sectionOneOptions = {
  rootMargin: "-270px 0px 0px 0px" //establish the position where the navbar will change
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  // sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


//  ***** REMOVE ARROWS AND ADD FADERS STYLE  ***** 

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "0px -60px -100px -50px",
    threshold: 0.05
  };
  let observer = new IntersectionObserver(beTouching, options);
  document.querySelectorAll(".on-scroll, .fade-in").forEach(p => {
    observer.observe(p);
  });
});
function beTouching(entries, ob) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scrolled");
    } else {
      entry.target.classList.remove("scrolled");
    }
  });
}

//  ***** LIGHTBOX AREA  ***** 
const lightbox = document.createElement('div')
const images = document.querySelectorAll('img:not(.profile)')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    document.body.style.overflowY='hidden'
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
  document.body.style.overflowY='scroll'
})


//  ***** TOGGLE BUTTON  ***** 

document.getElementById("toggle").addEventListener('click', function() {
  var element = document.getElementById("highlight");
  var label1 = document.getElementById("label1");
  var label2 = document.getElementById("label2");
  var className = element.className;
  // console.log(className);
    switch(className) {
      case "one":
        element.className = "two";
        label1.className = "toggleLabel color2";
        label2.className = "toggleLabel color1";
        break;
      case "two":
        element.className = "one";
        label1.className = "toggleLabel color1";
        label2.className = "toggleLabel color2";
     }
})

// -> SWITCH BETWEEN GALS 

// set witch gall are visible
$('.clickingdolls').show(); 
$('.artevisual').hide();

$("#toggle").on( "click", function() {
  $('.artevisual').fadeToggle("slow", "linear");
  $('.clickingdolls').fadeToggle("fast", function() {
    $('.profile').toggleClass('flipped')});
});

//Scroll to Top 
var mybutton = document.getElementById("button");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}