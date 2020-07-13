import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
// import { RecipeDetailPageModule } from "./recipe/recipe-detail/recipe-detail.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "recipe",
    pathMatch: "full",
  },

  {
    path: "recipe",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./recipe/recipe.module").then((m) => m.RecipePageModule),
      },
      {
        path: ":recipeId",
        loadChildren: () =>
          import("./recipe/recipe-detail/recipe-detail.module").then(
            (m) => m.RecipeDetailPageModule
          ),
      },
    ],
  },
  {
    path: "recipe",
    loadChildren: () =>
      import("./recipe/recipe.module").then((m) => m.RecipePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
