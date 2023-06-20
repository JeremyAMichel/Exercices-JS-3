let img = document.querySelector('#image1');

img.addEventListener("mouseover", addOrRemoveBorder);
img.addEventListener("mouseout", addOrRemoveBorder);

function addOrRemoveBorder(){
   if(this.classList.contains('redBorder')){
    this.classList.remove('redBorder');
   } else {
    this.classList.add('redBorder');
   }
}
