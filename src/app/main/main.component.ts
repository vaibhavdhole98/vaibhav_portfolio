// import { Component, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-main',
//   templateUrl: './main.component.html',
//   styleUrl: './main.component.css'
// })
// export class MainComponent {
//   showNavbar: boolean = false;
//   showBurgerMenu: boolean = false;
//   showNavbar2: boolean = false;
//   toggleNavbar() {
//     this.showNavbar = !this.showNavbar;
//   }
//   toggleBurgerMenu() {
//     this.showBurgerMenu = !this.showBurgerMenu;
//   }



//   @HostListener('document:click', ['$event'])
//   clickOutsideHeader(event: MouseEvent) {
//     let header = document.querySelector('header');
//     if (header && !header.contains(event.target as Node)) {
//       this.showBurgerMenu = false;
//     }
//   }

//   downloadPdf(): void {
//     let pdfUrl = 'assets/downloads/Vaibhav-Dhole Angular Developer (Resume).pdf'; 
//     window.open(pdfUrl, '_blank');

//   }
// }

import { Component, HostListener,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None // Add this line
})
export class MainComponent {
  showNavbar: boolean = false;
  showBurgerMenu: boolean = false;
  tooltipMessage: boolean = false;

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  toggleBurgerMenu() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }

  @HostListener('document:click', ['$event'])
  clickOutsideHeader(event: MouseEvent) {
    let header = document.querySelector('header');
    if (header && !header.contains(event.target as Node)) {
      this.showBurgerMenu = false;
    }
  }


  tooltipMessage2:string ='If you really, really want to hire me, just send me an email at the address below! 📧';
  downloadPdf(): void {
    this.tooltipMessage = true;
    //     let pdfUrl = 'assets/downloads/Vaibhav-Dhole Angular Developer (Resume).pdf'; 
    //     window.open(pdfUrl, '_blank');
    setTimeout(() => {
      this.tooltipMessage = false;
    }, 8000);
  }
}
