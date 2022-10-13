// ici je vais commencer a mettre mon algorithme en place.
// import displayRecipe from "../utils/displayRecipe.js";
import {displayTag, displayTagAppareil, displayTagUstens} from "../utils/displayTag.js";
import cleanHtml from "../utils/cleanHtml.js";



export default function searchRecipe(lettre, recipes){
    // alors ici, je met en place une constante, qui contient mes conditions(qui filtre le resultat de la recherche et va chercher dans le tableau les element correspondant), et retourne les recettes correspondante a la valeur de l'input. je met des || (ou) pour tout comparer directement.
    // ici commencé la v2 de l'algorithme, avec uniquement des boucles for.
    const recipesFiltre = recipes.filter((recipe) => recipe.name.toLowerCase().includes(lettre) || recipe.description.toLowerCase().includes(lettre) ||
    recipe.ingredients.some((ingObj) => {
     ingObj.ingredient.toLowerCase().includes(lettre)
    }) )
    // ici j'appel une fonction me permettant de "supprimé" l'html présent et correspondant bien sur
    // cleanHtml();
    
    return recipesFiltre;
}