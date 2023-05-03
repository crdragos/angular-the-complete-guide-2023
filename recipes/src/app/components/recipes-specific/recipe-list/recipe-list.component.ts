import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
