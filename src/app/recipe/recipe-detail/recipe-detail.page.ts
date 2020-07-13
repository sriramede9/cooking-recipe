import { Component, OnInit } from "@angular/core";
import { Recipe } from "./../../recipe.model";
import { RecipeServiceService } from "./../recipe-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramsMap) => {
      if (!paramsMap.has("recipeId")) {
        return;
      }
      this.selectedRecipe = this.recipeService.getRecipebyId(
        paramsMap.get("recipeId")
      );
    });
    console.log(this.selectedRecipe);
  }
}
