const product = document.querySelectorAll(".slider .product");
let counter = 0;
function left(){
  
  if(counter == 0){
    counter - product.length / 3 - 1
  }else{
    counter--
  }
  
  scroll()
}

function right(){

  if(counter == 0){
    counter - product.length / 3 - 1
  }else{
    counter++
  }
  scroll()
}

function scroll(){
  product.forEach(function(item){
    item.style.transform = 'translateX(-${counter * 1250}px)'
  })
}











// single slider 
// const slideshowElements = document.querySelectorAll(".slideshow-element");

// let countElements = 1;

// setInterval(() => {
//   countElements++;
//   let currentElement = document.querySelector(".current");
//   currentElement.classList.remove("current");

//   if (countElements > slideshowElements.length) {
//     slideshowElements[0].classList.add("current");
//     countElements = 1;
//   } else {
//     currentElement.nextElementSibling.classList.add("current");
//   }
// }, 3000);


