let text = document.getElementById("text");
let colorButtons = document.querySelectorAll(".color");

//pour chaque bouton color
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.classList[1]);


    // la variable couleur sera égale à la deuxieme classe de chaque bouton (green, red, blue)
    let color = button.classList[1];

    // si mon texte ne contient pas déjà la couleur du bouton sur lequel j'ai déjà cliqué
    if(!text.classList.contains(color)){

        // je retire la couleur qu'il pourrait déjà avoir, si il n'avait pas de couleur de base ces if ne feront rien !
        if(text.classList.contains('green')){
            text.classList.remove('green');
        } else {
            if(text.classList.contains('blue')){
                text.classList.remove('blue');
            } else {
                if(text.classList.contains('red')){
                    text.classList.remove('red');
                }
            }
        }

        // j'applique la couleur sur laquelle j'ai cliqué
        text.classList.add(color);
    }
    
  });
});