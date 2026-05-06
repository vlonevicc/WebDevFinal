import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { Topbar } from './components/topbar/topbar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkActive, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pantry-to-plate');
  isSidebarOpen = false;

  constructor(private http: HttpClient) {}

  addNewRecipe() {
    const newRecipe = {
      name: "New Recipe",
      ingredients: [],
      instructions: ""
    };

    this.http.post('http://localhost:3000/api/recipes', newRecipe)
      .subscribe(() => {
        console.log("Recipe created");
      });
  }
}