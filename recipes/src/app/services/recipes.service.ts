import {Injectable} from "@angular/core";
import {Recipe} from "../models/recipe";
import {Ingredient} from "../models/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Tasty schnitzel',
      'A super tasty schnitzel - just awesome!',
      'https://mydinner.co.uk/wp-content/uploads/2022/02/cordon-blue-schnitzel-1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ],
    ),
    new Recipe(
      2,
      'Big Fat Burger',
      'What else you need to say?',
      'https://hips.hearstapps.com/hmg-prod/images/copycat-western-bacon-cheeseburger-2-1651789305.jpeg?crop=1.00xw:0.755xh;0,0.166xh&resize=1200:*',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ],
    ),
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    //return a copy of the recipes array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  getRecipeById(id: number) {
    return this.recipes.filter(recipe => recipe.id === id).at(0);
  }
}