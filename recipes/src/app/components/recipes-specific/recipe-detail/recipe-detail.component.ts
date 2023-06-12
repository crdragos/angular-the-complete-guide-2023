import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe";
import {RecipesService} from "../../../services/recipes.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
          this.recipe = this.recipesService.getRecipeById(+params['id']);
        }
      );
  }

  onGoToShoppingList(): void {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.recipe.id - 1);
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
