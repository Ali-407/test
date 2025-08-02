import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true, // required if you're importing it into another standalone component
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'] // ✅ correct spelling
})
export class Navbar {}
