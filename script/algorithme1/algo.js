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

    // ici commencé la v2 de l'algorithme, avec uniquement des boucles for.
    for (let i = 0; i < recipes.length; i++) {
  
        const element = recipes[i].ingredients
        console.log("element:",element);
        const elementName = recipes[i].name;
        const elementDescription = recipes[i].description
        for (let j = 0; j < element.length; j++) {
            const ingredients = element[j];
            console.log(ingredients);
            if (ingredients.ingredient.toLowerCase().includes(lettre)) {
                    result.push(recipes[i])
            }
        }
        if (elementName.toLowerCase().includes(lettre) || elementDescription.toLowerCase().includes(lettre)) {
            result.push(recipes[i])
        }
        // for (let j = 0; j < element.length; j++) {
        //     const ingredient = element[j];
        //     console.log(ingredient.ingredient);
        //     if (ingredient.ingredient.toLowerCase().includes(lettre)) {
        //         result.push(recipes[i])
        //     }
        // }
       
            
    
       
       
        // if (elementName.toLowerCase().includes(lettre) || elementDescription.toLowerCase().includes(lettre)) {
        //     // console.log("element[j]:",element[j]);
        //     result.push(recipes[i]) 
        //     console.log(recipes[i]);
        // }


      
    
        
    }
    console.log(result);
    return result
}