//ici faire une fonction que j'appelerai dans displayTag qui permettra de crée et afficher le bouton avec le tag concerner, mais il vas falloir aussi le trier avec le tableau recipes.
import { tagsObject } from "../index.js";
import { recipes } from "../../data/recipes.js";
import refresh from "./refresh.js";
import { searchByTagAppareil, searchByTags, searchByTagUstens } from "../algorithme1/searchByTag.js";

export function selectTag(oneTag){
    const divTagSelect = document.querySelector('.tagSelect');
    const tagAfficher = document.createElement('button');
    const tagTitle = document.createElement('p');
    const iconClose = document.createElement('i');

    tagTitle.textContent = oneTag;
    tagTitle.className="ingredientTitle"
    iconClose.className="iconCloseTag fa-regular fa-circle-xmark"
    tagAfficher.className="tagShowUpIngredient"


    iconClose.addEventListener('click', ()=>{
        removeTag(tagAfficher);
        // const newSearching = searchByTags(oneTag, recipes)
        // refresh(newSearching)

        
        // La boucle for et la pour essayé la methode dites du mentor.
        for (let i = 0; i < tagsObject.ingredients.length; i++) {
            const element = tagsObject.ingredients[i];
            console.log("element:",element);
            if(element === tagTitle.textContent){
                tagsObject.ingredients.splice(i, 1)
                 const newSearching = searchByTags(tagsObject.ingredients, recipes)
                refresh(newSearching)
                console.log("newSearching:",newSearching);
            }
        }
        console.log(tagsObject);
        // console.log(tagsObject);
    })


    divTagSelect.style.display="flex"
    tagAfficher.appendChild(tagTitle);
    tagAfficher.appendChild(iconClose);
    divTagSelect.appendChild(tagAfficher);
}

export function selectAppareil(oneTag){
    //mettre en place cette fonction, comme au dessus.
    const divTagSelect = document.querySelector('.tagSelect');
    const tagAfficher = document.createElement('button');
    const tagTitle = document.createElement('p');
    const iconClose = document.createElement('i');

    tagTitle.textContent = oneTag;
    tagTitle.className="AppareilTitle"
    iconClose.className="iconCloseTag fa-regular fa-circle-xmark"
    tagAfficher.className="tagShowUpAppareil"


    iconClose.addEventListener('click', ()=>{
        removeTag(tagAfficher);
        for (let i = 0; i < tagsObject.appareil.length; i++) {
            const element = tagsObject.appareil[i];
            if(element === tagTitle.textContent){
                tagsObject.appareil.splice(i, 1)
                console.log(tagsObject);
                const newSearching = searchByTagAppareil(tagsObject.appareil, recipes)
                refresh(newSearching)
                console.log("newSearching:",newSearching);
            }
            
        }
    })

    tagAfficher.appendChild(tagTitle);
    tagAfficher.appendChild(iconClose);
    divTagSelect.appendChild(tagAfficher);
}

export function selectUstens(oneTag){
    //mettre en place cette fonction, comme au dessus.
    const divTagSelect = document.querySelector('.tagSelect');
    const tagAfficher = document.createElement('button');
    const tagTitle = document.createElement('p');
    const iconClose = document.createElement('i');

    tagTitle.textContent = oneTag;
    tagTitle.className="AppareilTitle"
    iconClose.className="iconCloseTag fa-regular fa-circle-xmark"
    tagAfficher.className="tagShowUpUstens"


    iconClose.addEventListener('click', ()=>{
        removeTag(tagAfficher);
        for (let i = 0; i < tagsObject.ustensils.length; i++) {
            const element = tagsObject.ustensils[i];
            if(element === tagTitle.textContent){
                tagsObject.ustensils.splice(i, 1)
                const newSearching = searchByTagUstens(tagsObject.ustensils, recipes)
                refresh(newSearching)
                console.log("newSearching:",newSearching);
            }
            
        }
        console.log(tagsObject);
    })

    tagAfficher.appendChild(tagTitle);
    tagAfficher.appendChild(iconClose);
    divTagSelect.appendChild(tagAfficher);
}
// la je met en place la fonction qui va le refermer.
function removeTag(button){
    // je me sert de remove pour supprimé l'élement html, beaucoup plus simple pour ce cas la plutot que de jouer avec le style, sa fonctionne a moitié vu que sa m'enleve le premiere element html
    
    button.remove();

}