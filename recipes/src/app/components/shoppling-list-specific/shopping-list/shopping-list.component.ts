import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../../models/ingredient";
import {ShoppingListService} from "../../../services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];

  private ingredientsChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangedSubscription = this.shoppingListService.getIngredientsChangedEvent()
      .subscribe((ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
  }
}
