import { Component, OnInit } from "@angular/core";
import { Recipe } from "./../recipe.model";
import { RecipeServiceService } from "./recipe-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.page.html",
  styleUrls: ["./recipe.page.scss"],
})
export class RecipePage implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.recipes = this.recipeService.getRecipes();
  }

  ionViewWillEnter() {
    console.log("will Enter");
    this.recipes = this.recipeService.getRecipes();
  }
  ionViewDidEnter() {
    console.log("Did Enter!!");
  }
  ionViewWillLeave() {
    console.log("will Leave");
  }
  ionViewDidLeave() {
    console.log("Did Leave");
  }
  onSelect(id: string) {
    // this.routerlink.red
    // console.log("this is the id", id);
    this.router.navigate(["/recipe", id]);
  }
}
