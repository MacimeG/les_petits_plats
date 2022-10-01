//ici faire l'algorithme de recherche par rapport au tags

// import cleanHtml from "../utils/cleanHtml.js";


// export function searchByTags(tagSelected, recipes){
//     // mettre en place la fonction.
    
//     const tagFiltre = recipes.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(tagSelected)));

//     // cleanHtml();

//     return tagFiltre;

// }
export function searchByTagAppareil(tagSelected, recipes){
    // mettre en place la fonction
    const tagFiltre = recipes.filter((recipe)=> recipe.appliance.toLowerCase().includes(tagSelected));
    
    // cleanHtml();

    return tagFiltre;
}

export function searchByTagUstens(tagSelected, recipes){
    const tagFiltre = recipes.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.toLowerCase().includes(tagSelected)));

    // cleanHtml();

    return tagFiltre;
}

export function searchByTagsV2(tagSelected, recipes){
    let selectedRecipes= [];

    //ici la v1 de ingredientsFiltre
    // console.log(tagSelected);
    // const ingredientsFiltre = recipes.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(tagSelected.ingredients)));

    // ici la v2 de ingredientsFiltre
    const ingredientsFiltre = recipes.filter( recipe => recipe.ingredients.some( ing=> ing.ingredient.toLowerCase().includes(tagSelected.ingredients)));

    // const ingredientsFiltre= recipes.filter(recipe => recipe.ingredients.some(ing => console.log(ing.ingredient)))

    // for (const iterator of Object.keys(tagSelected)) {
    //     const element = tagSelected[iterator]
    //     console.log(element);
    // }

    // for (const key in tagSelected) {
    //     const element = tagSelected[key];
    //     console.log(element);
    // }
    

    console.log("tagSelected",tagSelected);
    console.log("recipes", recipes);
    // console.log("ingredientsFiltre",ingredientsFiltre);
    
    const applianceFiltre = recipes.filter((recipe)=> recipe.appliance.toLowerCase().includes(tagSelected));
    
    const ustensilsFiltre = recipes.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.toLowerCase().includes(tagSelected)));
    
    selectedRecipes = [
        ...ingredientsFiltre,
        ...applianceFiltre,
        ...ustensilsFiltre,
    ];
    // console.log("selectedRecipes",selectedRecipes);
    return selectedRecipes;

}


export function searchByTags(tagsObject, recipes){
    console.log('tagObj:',tagsObject);
    const result = searchByTagsV2(tagsObject, recipes)
    // console.log('resulat:',result);
    return result
}

