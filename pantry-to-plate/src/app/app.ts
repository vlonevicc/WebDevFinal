import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { Topbar } from './components/topbar/topbar';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkActive, Topbar, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pantry-to-plate');
  isSidebarOpen = false;

  constructor(private http: HttpClient) {}

  showRecipeModal = false;

  newRecipe = {
    name: '',
    ingredients: '',
    instructions: ''
  };

  submitRecipe() {
    const formattedRecipe = {
      name: this.newRecipe.name,
      ingredients: this.newRecipe.ingredients.split(',').map(i => ({
        name: i.trim(),
        quantity: ""
      })),
      instructions: this.newRecipe.instructions
    };

    this.http.post('http://localhost:3000/api/recipes', formattedRecipe)
      .subscribe(() => {
        console.log("Recipe created");

        // reset form
        this.newRecipe = { name: '', ingredients: '', instructions: '' };

        // close modal
        this.showRecipeModal = false;
      });
  }
}