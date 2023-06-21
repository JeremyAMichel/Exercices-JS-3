let img = document.querySelector('#image1');

img.addEventListener("mouseenter", addOrRemoveBorder);
img.addEventListener("mouseleave", addOrRemoveBorder);

function addOrRemoveBorder(){
   if(this.classList.contains('redBorder')){
    this.classList.remove('redBorder');
   } else {
    this.classList.add('redBorder');
   }
}
