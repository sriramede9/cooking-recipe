import { Component, OnInit } from "@angular/core";
import { Recipe } from "./../recipe.model";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.page.html",
  styleUrls: ["./recipe.page.scss"],
})
export class RecipePage implements OnInit {
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

  ngOnInit() {}
}
