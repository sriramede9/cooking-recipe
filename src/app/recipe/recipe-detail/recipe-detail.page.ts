import { Component, OnInit } from "@angular/core";
import { Recipe } from "./../../recipe.model";
import { RecipeServiceService } from "./../recipe-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public alertController: AlertController
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
    // console.log(this.selectedRecipe);
  }

  onClickBack() {
    this.router.navigate(["/recipe"]);
  }

  onDelete() {
    this.alertController
      .create({
        cssClass: "primary",
        header: "Do you Like to delete?",
        message: "This will remove item permanently.",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Delete",
            handler: () => {
              this.recipeService.deleteRecipe(this.selectedRecipe);
              this.onClickBack();
            },  
          },
        ],
      })
      .then((alertEl) => alertEl.present());

    // console.log("this is the selected recipe", this.selectedRecipe);
  }
}
