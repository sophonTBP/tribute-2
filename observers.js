const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll('.fade-in');
const sliders =document.querySelectorAll('.slide-in')
const sectionOneOptions = {
  threshold: 0,
  rootMargin: "-150px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
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

const appearOptions = {
  threshold:0,
  rootMargin:"0px 0px -400px 0px"
};


const appearOnscroll = new IntersectionObserver(
  function(
    entries, 
    appearOnScroll
    ){
      entries.forEach(entry =>{
        if(!entry.isIntersecting){
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      })
    }, 
    appearOptions);

faders.forEach(fader =>{
  appearOnscroll.observe(fader);
});

sliders.forEach(slider =>{
  appearOnscroll.observe(slider);
});


//Lazy loading//


const images = document.querySelectorAll("[data-src]");
function preloadImage(img){
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.src = src;
}
 const imgOptions = {
 threshold:0,
 rootMargin:"0px 0px -100px 0px"

 };
 const imgObserver = new IntersectionObserver((entries, imgObserver) => {
   entries.forEach(entry => {
     if(!entry.isIntersecting){
       return
     } else {
       preloadImage(entry.target);
       imgObserver.unobserve(entry.target);
     }
   });
 }, imgOptions);

 images.forEach(image => {
   imgObserver.observe(image);
 });