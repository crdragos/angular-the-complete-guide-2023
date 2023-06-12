import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {RecipesComponent} from './components/recipes-specific/recipes/recipes.component';
import {RecipeListComponent} from './components/recipes-specific/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './components/recipes-specific/recipe-detail/recipe-detail.component';
import {RecipeComponent} from './components/recipes-specific/recipe/recipe.component';
import {ShoppingListComponent} from './components/shoppling-list-specific/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './components/shoppling-list-specific/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './directives/dropdown.directive';
import {RecipesService} from "./services/recipes.service";
import {ShoppingListService} from "./services/shopping-list.service";
import {RecipeStartComponent} from './components/recipes-specific/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './components/recipes-specific/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RecipesService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
