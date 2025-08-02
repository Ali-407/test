import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true, // required for standalone imports like Navbar
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ correct spelling
})
export class App {
  protected readonly title = signal('app1');
}
