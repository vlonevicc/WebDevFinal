import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pantry',
  imports: [CommonModule],
  templateUrl: './pantry.html',
  styleUrl: './pantry.css',
})
export class Pantry implements OnInit {

  pantryItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPantryItems();
  }

  getPantryItems() {
    this.http.get('http://localhost:3000/api/pantry')
      .subscribe((data: any) => {
        this.pantryItems = data;
        console.log("Pantry Data:", data);
      });
  }

  addItem(name: string, quantity: number) {
    this.http.post('http://localhost:3000/api/pantry/add', { name, quantity })
      .subscribe(() => {
        this.getPantryItems();
      });
  }

  deleteItem(id: string) {
    this.http.delete(`http://localhost:3000/api/pantry/delete/${id}`)
      .subscribe(() => {
        this.getPantryItems();
      });
  }

  updateItem(id: string, quantity: number) {
    this.http.put(`http://localhost:3000/api/pantry/${id}`, { quantity })
      .subscribe(() => {
        this.getPantryItems();
      });
  }
}