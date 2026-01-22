import { recipes } from "./recipes";

export function getRecipesCategories(){
    const categories: string[] = ["Tous"];
    recipes.forEach(recipe => {
        recipe.categories.forEach(category => {
            if(!categories.includes(category)){
                categories.push(category);
            }
        });
    });
    return categories;
}