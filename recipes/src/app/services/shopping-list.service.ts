import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../models/ingredient";

@Injectable()
export class ShoppingListService {
  private ingredientsChangedEvent: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredientsChangedEvent(): EventEmitter<Ingredient[]> {
    return this.ingredientsChangedEvent;
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChangedEvent.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientsChangedEvent.emit(this.ingredients.slice());
  }
}
