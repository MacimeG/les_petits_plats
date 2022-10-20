import  cleanHtml  from "./cleanHtml.js";
import displayRecipe from "./displayRecipe.js";
import { displayTag, displayTagAppareil, displayTagUstens } from "./displayTag.js";
export default function refresh(recipes){
    cleanHtml();
    displayRecipe(recipes)
    displayTag(recipes)
    displayTagAppareil(recipes)
    displayTagUstens(recipes)
    // console.log("dans la fonction refresh:",recipes);

}