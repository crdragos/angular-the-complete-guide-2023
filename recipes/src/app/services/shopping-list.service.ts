import {Injectable} from "@angular/core";
import {Ingredient} from "../models/ingredient";
import {Subject} from "rxjs";

@Injectable()
export class ShoppingListService {
  private ingredientsChangedEvent: Subject<Ingredient[]> = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredientsChangedEvent(): Subject<Ingredient[]> {
    return this.ingredientsChangedEvent;
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChangedEvent.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientsChangedEvent.next(this.ingredients.slice());
  }
}
