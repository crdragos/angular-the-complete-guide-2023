import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe";
import {RecipesService} from "../../../services/recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipesService.getSelectedRecipe().subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
