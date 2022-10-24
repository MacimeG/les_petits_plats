// ici je vais commencer a mettre mon algorithme en place.
// import displayRecipe from "../utils/displayRecipe.js";
import {displayTag, displayTagAppareil, displayTagUstens} from "../utils/displayTag.js";
import cleanHtml from "../utils/cleanHtml.js";



// export default function searchRecipe(lettre, recipes){
//     // alors ici, je met en place une constante, qui contient mes conditions(qui filtre le resultat de la recherche et va chercher dans le tableau les element correspondant), et retourne les recettes correspondante a la valeur de l'input. je met des || (ou) pour tout comparer directement.
   
//     const recipesFiltre = recipes.filter((recipe) => recipe.name.toLowerCase().includes(lettre) || recipe.description.toLowerCase().includes(lettre) ||
//     recipe.ingredients.some((ingObj) => {
//      ingObj.ingredient.toLowerCase().includes(lettre)
//     }) )




    
//     return recipesFiltre;
// }


// ici la v2
export default function searchRecipe(lettre, recipes){
    const result = []
   
    // console.log(recipes);
    // ici commencé la v2 de l'algorithme, avec uniquement des boucles for.
    for (let i = 0; i < recipes.length; i++) {
  
        const element = recipes[i]
    
        for (let j = 0; j < element.ingredients.length; j++) {
            const ingredient = element.ingredients[j];
       
            if(element.name.toLowerCase().includes(lettre) || element.description.toLowerCase().includes(lettre) || ingredient.ingredient.toLowerCase().includes(lettre)){
                result.push(recipes[i])
            }
        }
    }
    const newSet = [... new Set(result)]

    return newSet
}