import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../../../services/shopping-list.service";
import {NgForm} from "@angular/forms";
import {Ingredient} from "../../../models/ingredient";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('addIngredientForm', {static: false}) addIngredientForm: NgForm;

  editingSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.editingSubscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredientByIndex(index);
        this.editMode = true;
        this.addIngredientForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        })
      });
  }

  onSubmit(addIngredientForm: NgForm): void {
    let values = addIngredientForm.value;
    const ingredient: Ingredient = new Ingredient(values.name, values.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
      this.editMode = false;
      this.addIngredientForm.reset();
      return;
    }

    this.shoppingListService.addIngredient(ingredient);
    this.addIngredientForm.reset();
  }

  onClearPressed(addIngredientForm: NgForm): void {
    addIngredientForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.editingSubscription.unsubscribe();
  }

  onDelete(addIngredientForm: NgForm) {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClearPressed(addIngredientForm);
  }
}
