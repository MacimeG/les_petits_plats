import  factoryRecipe  from "../factories/indexFactorie.js";
// ici je crée une fonction qui va m'afficher les cards crée dans ma factory que j'appel sur la page index.js

// export default function displayRecipe(recipes){
//     console.log(recipes);
//     recipes.forEach(element => {
//         const factorie = factoryRecipe(element);
//         const contentRecetteCard = document.querySelector('.recette_card');
//         contentRecetteCard.appendChild(factorie);
//     });
// }

// ici la V2
export default function displayRecipe(recipes){
    // recipes.forEach(element => {
    //     const factorie = factoryRecipe(element);
    //     const contentRecetteCard = document.querySelector('.recette_card');
    //     contentRecetteCard.appendChild(factorie);
    // });
    for (let i = 0; i < recipes.length; i++) {
        const element = recipes[i];
        const factorie = factoryRecipe(element)
        const contentRecetteCard = document.querySelector('.recette_card');
        contentRecetteCard.appendChild(factorie);
    }
}