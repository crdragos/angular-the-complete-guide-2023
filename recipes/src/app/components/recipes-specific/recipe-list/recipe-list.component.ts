import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'This is simply a test 1', 'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg'),
    new Recipe('A test recipe 2', 'This is simply a test 2', 'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg'),
    new Recipe('A test recipe 3', 'This is simply a test 3', 'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg'),
    new Recipe('A test recipe 4', 'This is simply a test 4', 'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg'),
  ];

  @Output() selectRecipeEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeClicked(recipe: Recipe) {
    this.selectRecipeEvent.emit(recipe);
  }
}
