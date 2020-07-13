import { Injectable } from "@angular/core";
import { Recipe } from "./../recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipeServiceService {
  recipes: Recipe[] = [
    {
      id: "r1",
      title: "Sea",
      imagePath:
        "https://cdn.pixabay.com/photo/2020/07/08/04/08/sea-5382490_1280.jpg",
      ingredients: ["Apple", "Banana", "Pineapple"],
    },
    {
      id: "r2",
      title: "Deer",
      imagePath:
        "https://cdn.pixabay.com/photo/2020/07/11/08/00/deer-5393082_1280.jpg",
      ingredients: ["Apple", "Banana", "Pineapple"],
    },
  ];
  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipebyId(rid: string) {
    return this.recipes.find((x) => {
      return rid === x.id;
    });
  }
}
