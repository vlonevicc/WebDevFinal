import { Routes } from '@angular/router';
import { Discovery } from './pages/discovery/discovery';
import { Cookbook } from './pages/cookbook/cookbook';
import { Pantry } from './pages/pantry/pantry';
import { Grocery } from './pages/grocery/grocery';

export const routes: Routes = [
  { path: '', component: Discovery },
  { path: 'cookbook', component: Cookbook },
  { path: 'pantry', component: Pantry },
  { path: 'grocery', component: Grocery }
];