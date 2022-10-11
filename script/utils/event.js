// ici faire la fonction d'ouverture du bouton ingrédient, et l'appeler sur l'add event listener situé sur la page index. 
export function openIngredient(){
    //ici je récupere les elements dont j'ai besoin.
    const ul = document.querySelector('.ingredient');
    const btn = document.querySelector('.search_ingredients');
    const iconIng = document.querySelector('.btnIcon');
    
    // ici je met en place mes toggles qui vont permettre l'ouverture de mon bouton.
    ul.classList.toggle('ingredient_list_open');
    btn.classList.toggle('ingredientOpen');
    iconIng.classList.toggle('ing');

}
// ici pareil mais pour l'ouverture du bouton appareil
export function openAppareil(){
    const ul = document.querySelector('.appareil')
    const btn = document.querySelector('.search_appareil');
    const iconApp = document.querySelector('.btnIconAppareil');

    ul.classList.toggle('ulAppareilOpen');
    btn.classList.toggle('appareilOpen')
    iconApp.classList.toggle('appareil_icon')
}

//ici pareil mais pour l'ouverture du bouton ustens

export function openUstens(){
    const ul = document.querySelector('.ustens');
    const btn = document.querySelector('.search_ustensiles');
    const icon = document.querySelector('.btnIconUstens');

    ul.classList.toggle('ustensOpen')
    btn.classList.toggle('ustensiles_open')
    icon.classList.toggle('iconUstensOpen')
}

export function searchInList(input, item){
    item.forEach(li => {
        if (!li.textContent.toLowerCase().includes(input)) {
            li.style.display="none"
        }
        else{
            li.style.display="list-item"
        }
    });
}