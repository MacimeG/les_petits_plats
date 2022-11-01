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

export function displayTag(recipes) {
  let tag = btnTriIngredient(recipes);
  console.log("tag:",tag);
  const ul = document.querySelector(".ingredient");
  tag.map((oneIngredient) => {
    const li = document.createElement("li");
    li.className = "ingredient_item ";
    li.textContent = oneIngredient;

    // ici je vais mettre en place l'écouteur d'évenement qui va me permettre de géré l'affichage des tags.
    li.addEventListener("click", (e) => {
      selectTag(oneIngredient);
      tagsObject.ingredients.push(oneIngredient);
      console.log(recipes);
     
      li.remove()

      recipes = recipes.filter((recipe) =>
        recipe.ingredients.filter((ing) =>
        console.log("ing.ingredient etc...:", !ing.ingredient.toLowerCase().includes(oneIngredient))
        //   !ing.ingredient.toLowerCase().includes(oneIngredient)
        )
      );
   
     
      console.log("apres la ligne:", recipes);
      for (let i = 0; i < tagsObject.ingredients.length; i++) {
        let element = tagsObject.ingredients[i];

        const newSearchTag = searchByTags(element, recipes);
         // ici je fais un .map sur le resultat de la recherche pour récupéré les ingredients
         newSearchTag.map((ingredients) =>
           ingredients.ingredients.forEach((element) => {
             // je push les ingredients dans mon tableau vide
             tag.push(element.ingredient);
           })
         );
        tag.filter(
          (ingr) => !tagsObject.ingredients.includes(ingr)
        );
         // je fais un newSet de mon tableau pour enelever les doublons.
         tag = [...new Set(tag)];
         tag.sort();
    
        refresh(newSearchTag);
      }
    });

    ul.appendChild(li);
  });
  return;
}

export function displayTagAppareil(recipes) {
  const tagAppareil = btnTriAppareil(recipes);
  const ulAppareil = document.querySelector(".appareil");
  tagAppareil.map((oneAppareil) => {
    const li = document.createElement("li");
    li.className = "appareil_item";
    li.textContent = oneAppareil;

    li.addEventListener("click", (e) => {
      selectAppareil(oneAppareil);
      tagsObject.appareil.push(oneAppareil);
      for (let i = 0; i < tagsObject.appareil.length; i++) {
        let element = tagsObject.appareil[i];
        console.log("element:", element);
        const newSearchTag = searchByTagAppareil(element, recipes);
        console.log("newSearchTag:", newSearchTag);
        console.log("etarget:", e.target);

        // e.target.value.remove()
        // newSearchTag.remove(e.target.value)
        refresh(newSearchTag);
      }
      console.log(tagsObject);
      // const newSearchTag = searchByTags(tagsObject, recipes);

      // refresh(newSearchTag)
    });

    ulAppareil.appendChild(li);
  });
  return;
}

export function displayTagUstens(recipes) {
  const tagUstens = btnTriUstens(recipes);
  const ulUstens = document.querySelector(".ustens");
  tagUstens.map((oneUstens) => {
    const li = document.createElement("li");
    li.className = "ustens_item";
    li.textContent = oneUstens;

    li.addEventListener("click", (e) => {
      selectUstens(oneUstens);
      tagsObject.ustensils.push(oneUstens);
      for (let i = 0; i < tagsObject.ustensils.length; i++) {
        let element = tagsObject.ustensils[i];
        console.log("element:", element);
        const newSearchTag = searchByTagUstens(element, recipes);
        console.log("newSearchTag:", newSearchTag);
        console.log("etarget:", e.target);
        // e.target.classList.remove('ingredient_item')
        // e.target.classList.add('none')
        // e.target.value.remove()
        // newSearchTag.remove(e.target.value)
        refresh(newSearchTag);
      }
      console.log(tagsObject);
      // const newSearchTag = searchByTags(tagsObject, recipes);
      // const newSearchTag = searchByTagUstens(oneUstens, recipes);

      // refresh(newSearchTag)
    });

    ulUstens.appendChild(li);
  });
  return;
}
