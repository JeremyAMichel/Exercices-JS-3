
// On masque le texte dès le chargement de la page
let text = document.querySelector('#text');

text.classList.add('displayNone');

// Puis on vient selectionner les ancres de la page
let ancres = document.querySelectorAll("a[href='#']");

// Pour la premiere ancre, on met un event qui permet d'afficher le texte
ancres[0].addEventListener("click", () =>{
    if(text.classList.contains('displayNone')){
        text.classList.remove('displayNone');
    }
})


// Pour la deuxieme ancre, on met un event qui permet de masquer le texte
ancres[1].addEventListener("click", () =>{
    if(!text.classList.contains('displayNone')){
        text.classList.add('displayNone');
    }
})






