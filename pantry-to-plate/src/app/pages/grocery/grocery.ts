import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grocery.html',
  styleUrl: './grocery.css',
})
export class Grocery implements OnInit {

  groceryItems: any[] = [];
  recipes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGroceryItems();
  }

  getGroceryItems() {
    this.http.get('http://localhost:3000/api/grocery')
      .subscribe((data: any) => {
        this.groceryItems = data;
      });
  }

  addItem(name: string, quantity: number) {
    this.http.post('http://localhost:3000/api/grocery/add', {
      name,
      quantity
    }).subscribe(() => this.getGroceryItems());
  }

  deleteItem(id: string) {
    this.http.delete(`http://localhost:3000/api/grocery/delete/${id}`)
      .subscribe(() => {
        this.getGroceryItems();
      });
  }

  toggleChecked(item: any) {
    item.checked = !item.checked;
  }

  syncToPantry() {
  const checkedItems = this.groceryItems.filter(i => i.checked);

    checkedItems.forEach(item => {
      this.http.post('http://localhost:3000/api/pantry/add', {
        name: item.name,
        quantity: item.quantity
      }).subscribe();
  });

    alert('Synced to pantry!');
  }

  get checkedCount() {
      return this.groceryItems.filter(i => i.checked).length;
  }

  get activeRecipeCount(): number {
    const recipeSet = new Set();

    this.groceryItems.forEach(item => {
      if (item.linkedRecipe) {
        recipeSet.add(item.linkedRecipe);
      }
    });

    return recipeSet.size;
  }
}