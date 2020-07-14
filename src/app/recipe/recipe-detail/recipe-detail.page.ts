import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "./../../recipe.model";
import { RecipeServiceService } from "./../recipe-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
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

  ionViewWillEnter() {
    console.log("will Enter r-d");
  }
  ionViewDidEnter() {
    console.log("Did Enter!! r-d");
  }
  ionViewWillLeave() {
    console.log("will Leave r-d");
  }
  ionViewDidLeave() {
    console.log("Did Leave r-d");
  }

  onClickBack() {
    this.router.navigate(["/recipe"]);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("On-Destroy is called on recipe-detail page");
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
