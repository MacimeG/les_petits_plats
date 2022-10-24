// faire la fonction qui va m'afficher uniquement les ingredient dans le bouton, rien d'autre.


// export  function btnTriIngredient(recipes){
//     // je commence par crée un tableau vide.
//     const allIngredient = [];
//     // ensuite j'itere sur l'objet recipes (les recettes)
//     recipes.forEach(element => {
//         //  et ici je re itere sur l'objet element mais je vais ici chercher uniquement que les ingredients. que j'insere ensuite dans mon tableau vide.
//         element.ingredients.forEach(object => allIngredient.push(object.ingredient))
//     });
   

//     // ici je fais un .map pour parcourir les elements de mon tableau, et tout mettre en minuscule.
//     const ingredientMinuscule = allIngredient.map(element =>{
//         return element.toLowerCase()
//     })
//     // ensuite avec un new Set je filtre mon nouveau tableau pour pouvoir supprimé tous les doublons.
//     const setIngredient = [... new Set(ingredientMinuscule)]
    
//     return setIngredient;  
// } 



// ici la v2 

export function btnTriIngredient(recipes){
     // ici je teste la v2
     const allIngredient = []
  
     for (let i = 0; i < recipes.length; i++) {
        const element = recipes[i];
        // console.log(element.ingredients);
        for (let j = 0; j < element.ingredients.length; j++) {
            const ingredient = element.ingredients[j];
            // console.log(ingredient.ingredient);
            allIngredient.push(ingredient.ingredient)
            // console.log(allIngredient);
           
        }
        
    }
    for (let k = 0; k < allIngredient.length; k++) {
        // let element = allIngredient[k].toLowerCase();
     
        const setIngredient = [... new Set(allIngredient)]
        // console.log(setIngredient);
  
        return setIngredient
    }
}

// ici la v1
// export  function btnTriAppareil(recipes){
//     // je commence par crée un tableau vide
//     const allAppareil = [];
//     // ici je vais iterer sur l'objet recipes, pour en sortir que les appareils.(appliance)
//     recipes.forEach(element => {
//         allAppareil.push(element.appliance)
//     });
    
    
//     // ici je fais un .map pour parcourir les elements du tableau, et tout mettre en minuscule.
//     const appareilMinuscule = allAppareil.map(element =>{
//         return element.toLowerCase();
//     })
//     // ensuite ici je fais un new set et je filtre a nouveau mon tableau, pour qu'il supprime tout les doublons.
//     const setAppareil = [... new Set(appareilMinuscule)]

//     return setAppareil
// }



// ici la v2
export function btnTriAppareil(recipes){
     // ici je teste la v2
     const allAppareil = []
     
     for (let i = 0; i < recipes.length; i++) {
        const element = recipes[i];
        // console.log(element.appliance);
        allAppareil.push(element.appliance)
        
        
    }
    for (let k = 0; k < allAppareil.length; k++) {
        // let element = allAppareil[k].toLowerCase();
    
        const setAppareil = [... new Set(allAppareil)]
        // console.log(setAppareil);
      
        return setAppareil
    }
}

// export function btnTriUstens(recipes){
//     const allUstens = [];

//     recipes.forEach(element =>{
//         element.ustensils.forEach(ustensil => allUstens.push(ustensil))
//     })
   
//     const ustensMinuscule = allUstens.map(element =>{
//         return element.toLowerCase();
//     })
  
//     const setUstens = [... new Set(ustensMinuscule)];
//     return setUstens
// }


// ici la v2
export function btnTriUstens(recipes){
    // ici je teste la v2
    const allUstens = []
  
    for (let i = 0; i < recipes.length; i++) {
       const element = recipes[i];

       for (let j = 0; j < element.ustensils.length; j++) {
           const ustens = element.ustensils[j];
      
           allUstens.push(ustens)
        }
    }
   for (let k = 0; k < allUstens.length; k++) {
       // let element = allIngredient[k].toLowerCase();
    
       const setUstens = [... new Set(allUstens)]
 
       return setUstens
    }
}