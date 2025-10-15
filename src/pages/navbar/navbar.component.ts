import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 isMenuOpen = false; // لحفظ حالة القائمة المنسدلة

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // تغيير حالة القائمة عند الضغط
    console.log('Menu Toggled: ', this.isMenuOpen); // طباعة لتأكد من حالة القائمة
  }
}
