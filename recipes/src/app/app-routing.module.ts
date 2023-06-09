import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from "./components/recipes-specific/recipes/recipes.component";
import {ShoppingListComponent} from "./components/shoppling-list-specific/shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./components/recipes-specific/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./components/recipes-specific/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./components/recipes-specific/recipe-edit/recipe-edit.component";

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent},
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
