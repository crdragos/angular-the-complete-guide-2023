import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe";
import {RecipesService} from "../../../services/recipes.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
  }

  onSelected(): void {
    this.recipesService.getSelectedRecipe().emit(this.recipe);
  }
}
