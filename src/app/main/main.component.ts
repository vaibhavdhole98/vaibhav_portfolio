import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  showNavbar: boolean = false;
  showBurgerMenu: boolean = false;
  showNavbar2: boolean = false;
  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
  toggleBurgerMenu() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }
  showTooltip: boolean = false;
  isDisabled: boolean = true; // Set this based on your condition

  @HostListener('document:click', ['$event'])
  clickOutsideHeader(event: MouseEvent) {
    let header = document.querySelector('header');
    if (header && !header.contains(event.target as Node)) {
      this.showBurgerMenu = false;
    }
  }

  downloadPdf(): void {
    let pdfUrl = 'assets/downloads/Vaibhav-Dhole Angular Developer (Resume).pdf'; 
    window.open(pdfUrl, '_blank');

  }
}
