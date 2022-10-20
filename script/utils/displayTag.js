import {
  btnTriIngredient,
  btnTriAppareil,
  btnTriUstens,
} from "../factories/tagContainer.js";
import { selectTag, selectAppareil, selectUstens } from "./SelectTag.js";
import {
  searchByTagAppareil,
  searchByTags,
  searchByTagUstens,
} from "../algorithme1/searchByTag.js";
import refresh from "./refresh.js";
import { tagsObject } from "../index.js";
// ici je met en place des fonctions, qui vont elle même appeler les fonctions contenant les tableaux, qui eux meme contienne les ingredient, ustensiles ou appareil, et ensuite je les fais s'afficher dans le DOM

// export function displayTag(recipes) {
//   let tag = btnTriIngredient(recipes);
//   const ul = document.querySelector(".ingredient");
//   tag.map((oneIngredient) => {
//     const li = document.createElement("li");
//     li.className = "ingredient_item ";
//     li.textContent = oneIngredient;

//     // ici je vais mettre en place l'écouteur d'évenement qui va me permettre de géré l'affichage des tags.
//     li.addEventListener("click", (e) => {
//       selectTag(oneIngredient);
//       tagsObject.ingredients.push(oneIngredient);
//       console.log(recipes);
     
      

//       recipes = recipes.filter((recipe) =>
//         recipe.ingredients.filter((ing) =>
//         console.log("ing.ingredient etc...:", !ing.ingredient.toLowerCase().includes(oneIngredient))
//         //   !ing.ingredient.toLowerCase().includes(oneIngredient)
//         )
//       );
   
     
//       // console.log("apres la ligne:", recipes);
//       for (let i = 0; i < tagsObject.ingredients.length; i++) {
//         let element = tagsObject.ingredients[i];

//         const newSearchTag = searchByTags(element, recipes);
//         // if (tagsObject >= 0 || !tagsObject.ingredients.includes(element)) {
//         //     newSearchTag= newSearchTag.remove(element)
//         // }
//         newSearchTag.filter((recipe)=>{
//             recipe.ingredients.filter((ingredient)=>{
//                 console.log("ingredient newSearchTag:",ingredient.ingredient === oneIngredient);
//             })
//         })
//         // console.log("newSearchTag:",newSearchTag);
     
//         // console.log("tag apres la ligne:",tag);
     
       
//         refresh(newSearchTag);
//       }
//     });

//     ul.appendChild(li);
//   });
//   return;
// }


//ici la v2
export function displayTag(recipes) {
  const tag = btnTriIngredient(recipes);
  // console.log(tag);
  const ul = document.querySelector(".ingredient");
  for (let i = 0; i < tag.length; i++) {
    const li = document.createElement('li');
    const element = tag[i];
    li.className="ingredient_item"
    li.textContent=element
    // console.log(element);
    
    ul.appendChild(li)
  }
  return
}



// export function displayTagAppareil(recipes) {
//   const tagAppareil = btnTriAppareil(recipes);
//   const ulAppareil = document.querySelector(".appareil");
//   tagAppareil.map((oneAppareil) => {
//     const li = document.createElement("li");
//     li.className = "appareil_item";
//     li.textContent = oneAppareil;

//     li.addEventListener("click", (e) => {
//       selectAppareil(oneAppareil);
//       tagsObject.appareil.push(oneAppareil);
//       for (let i = 0; i < tagsObject.appareil.length; i++) {
//         let element = tagsObject.appareil[i];
//         console.log("element:", element);
//         const newSearchTag = searchByTagAppareil(element, recipes);
//         console.log("newSearchTag:", newSearchTag);
//         console.log("etarget:", e.target);

//         // e.target.value.remove()
//         // newSearchTag.remove(e.target.value)
//         refresh(newSearchTag);
//       }
//       console.log(tagsObject);
//       // const newSearchTag = searchByTags(tagsObject, recipes);

//       // refresh(newSearchTag)
//     });

//     ulAppareil.appendChild(li);
//   });
//   return;
// }
//  ici la V2

  export function displayTagAppareil(recipes){
    const tagAppareil = btnTriAppareil(recipes);
    // console.log(tagAppareil);
    const ul = document.querySelector(".appareil");
    for (let i = 0; i < tagAppareil.length; i++) {
      const li = document.createElement('li');
      const element = tagAppareil[i];
      li.className="appareil_item"
      li.textContent= element
      // console.log(element);
      
      ul.appendChild(li)
    }
    return
  }

// export function displayTagUstens(recipes) {
//   const tagUstens = btnTriUstens(recipes);
//   const ulUstens = document.querySelector(".ustens");
//   tagUstens.map((oneUstens) => {
//     const li = document.createElement("li");
//     li.className = "ustens_item";
//     li.textContent = oneUstens;

//     li.addEventListener("click", (e) => {
//       selectUstens(oneUstens);
//       tagsObject.ustensils.push(oneUstens);
//       for (let i = 0; i < tagsObject.ustensils.length; i++) {
//         let element = tagsObject.ustensils[i];
//         console.log("element:", element);
//         const newSearchTag = searchByTagUstens(element, recipes);
//         console.log("newSearchTag:", newSearchTag);
//         console.log("etarget:", e.target);
//         // e.target.classList.remove('ingredient_item')
//         // e.target.classList.add('none')
//         // e.target.value.remove()
//         // newSearchTag.remove(e.target.value)
//         refresh(newSearchTag);
//       }
//       console.log(tagsObject);
//       // const newSearchTag = searchByTags(tagsObject, recipes);
//       // const newSearchTag = searchByTagUstens(oneUstens, recipes);

//       // refresh(newSearchTag)
//     });

//     ulUstens.appendChild(li);
//   });
//   return;
// }


// ici la v2
export function displayTagUstens(recipes){
  const tagUstens = btnTriUstens(recipes);
  // console.log(tagAppareil);
  const ul = document.querySelector(".ustens");
  for (let i = 0; i < tagUstens.length; i++) {
    const li = document.createElement('li');
    const element = tagUstens[i];
    li.className="ustens_item"
    li.textContent= element
    // console.log(element);
    
    ul.appendChild(li)
  }
  return
}
