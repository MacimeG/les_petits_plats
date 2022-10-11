//ici faire l'algorithme de recherche par rapport au tags

// import cleanHtml from "../utils/cleanHtml.js";


export function searchByTags(tagSelected, recipes){
    // mettre en place la fonction.
    
    const tagFiltre = recipes.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(tagSelected)));
   
    
    return tagFiltre;

}
export function searchByTagAppareil(tagSelected, recipes){
    // mettre en place la fonction
    const tagFiltre = recipes.filter((recipe)=> recipe.appliance.toLowerCase().includes(tagSelected));
    
    
    return tagFiltre;
}

export function searchByTagUstens(tagSelected, recipes){
    const tagFiltre = recipes.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.toLowerCase().includes(tagSelected)));

    
    return tagFiltre;
}

// export function searchByTagsV2(tagSelected, recipes){
//     let selectedRecipes= [];

//     //ici la v1 de ingredientsFiltre
//     // console.log(tagSelected);
//     // const ingredientsFiltre = recipes.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(tagSelected.ingredients)));
//     // console.log(ingredientsFiltre);
//     // ici la v2 de ingredientsFiltre
//     // const ingredientsFiltre = recipes.find( recipe => recipe.ingredients.some( ing=> ing.ingredient.toLowerCase().includes(tagSelected.ingredients)));

//     // console.log("tagSelected:", tagSelected);

//     for (const [key, value] of Object.entries(tagSelected)){
//         // console.log(`${key}: ${value}`);
//         let ingredientsFiltre =  recipes.filter((recipe)=> {
//             return recipe.ingredients.some((ing)=>{ 
//                     console.log('ing',ing.ingredient.toLowerCase().includes(`${value}`));
//                     // console.log('tagSelected:', tagSelected.ingredients[0])
//                     // console.log('value:',`${value}`);
//                     // console.log('ing', ing.ingredient.toString());
//                     // console.log("log:",ing.ingredient.toLowerCase()===`${value}`);    
//                     // return ing.ingredient.toLowerCase()===`${value}`
//                 })
//             });
//             return ingredientsFiltre
//     };


//     // for (const [key, value] of Object.entries(tagSelected)){
//     //     // console.log(`${key}: ${value}`);
//     //    for (let i = 0; i < recipes.length; i++) {
//     //     const ingredientFiltre = recipes[i].ingredients;
//     //     console.log(value);
        
//     //    }
//     // };
   







//     // const ingredientsFiltre =  recipes.filter((recipe)=> {
//     //     return recipe.ingredients.some((ing)=>{ 
//     //         // console.log('ing.ingredients:',ing.ingredient.toLowerCase());
//     //         // console.log('tagSelected:', tagSelected.ingredients[0])
            
//     //         console.log("log:",ing.ingredient.toLowerCase() === tagSelected.ingredients[0]);
//     //        return ing.ingredient.toLowerCase()=== tagSelected.ingredients[0]
//     //     })
//     // });
//     // console.log("ingredientFiltre",ingredientsFiltre);
   


    
//     let applianceFiltre = recipes.filter((recipe)=> recipe.appliance.toLowerCase().includes(tagSelected.appareil));
    
//     let ustensilsFiltre = recipes.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.toLowerCase().includes(tagSelected)));
    
//     selectedRecipes = [
//         ...ingredientsFiltre,
//         ...applianceFiltre,
//         ...ustensilsFiltre,
//     ];
//     console.log("selectedRecipes",selectedRecipes);
//     return selectedRecipes;

// }


// export function searchByTags(tagsObject, recipes){
//     // console.log('tagObj:',tagsObject);
//     const result = searchByTagsV2(tagsObject, recipes)
//     console.log('resulat:',result);
//     return result
// }

