import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { Topbar } from './components/topbar/topbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkActive, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pantry-to-plate');
  isSidebarOpen = false;
}