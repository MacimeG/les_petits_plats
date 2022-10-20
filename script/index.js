// ici en premier j'importe donc le fichier contenant toute les recettes.
import { recipes } from "../data/recipes.js";
import {openIngredient, openAppareil, openUstens, searchInList} from "./utils/event.js";
import searchRecipe from "./algorithme1/algo.js";
import refresh from "./utils/refresh.js"


export const tagsObject= {
    ingredients: [],
    appareil: [],
    ustensils: []
};
console.log(tagsObject);
refresh(recipes)

// ici je recupere les 3 boutons de tri
const btnIngredient = document.querySelector('.search_ingredients');
const btnAppareil = document.querySelector('.search_appareil');
const btnUstens = document.querySelector('.search_ustensiles');
const input = document.querySelector('#search');



// ici je leurs met un ecouteur d'évenement qui au clique m'ouvrira les boutons, contenant leurs ingredient etc...

btnIngredient.addEventListener('click', openIngredient);
btnAppareil.addEventListener('click', openAppareil);
btnUstens.addEventListener('click', openUstens);



// ici je met en place l'écouteur d'évenement qui executera ma fonction de recherche.
input.addEventListener('keyup', (e)=>{
    // mettre condition pour commencer la recherche a partir de 3 lettres entrées.
    if(e.target.value.length > 2){
        const newRecipe = searchRecipe(e.target.value, recipes)
        // console.log(newRecipe);
        // searchRecipe(e.target.value, recipes)
        refresh(newRecipe)
    }
    else{
        refresh(recipes)
    }
})
// ici je met en place les ecouteur d'évenement qui dans la barre de recherches des ingredients appareil etc.. vas sortir les bons tags quand l'user cherche coco par exemple.
const inputIngredient = document.querySelector('.ingredient_btn')
const ingredientItem = document.querySelectorAll('.ingredient_item')

const inputAppareil = document.querySelector('.appareil_btn')
const appareilItem= document.querySelectorAll('.appareil_item')

const inputUstens = document.querySelector('.ustens_btn')
const ustensItem = document.querySelectorAll('.ustens_item')

inputIngredient.addEventListener('keyup',(e)=>{
    searchInList(e.target.value, ingredientItem)
})

inputAppareil.addEventListener('keyup',(e)=>{
    searchInList(e.target.value, appareilItem)
})

inputUstens.addEventListener('keyup', (e)=>{
    searchInList(e.target.value, ustensItem)
})
