import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public showNavItems = false;
  public isMobileView = false;

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any){
  //   this.isMobileView = event.target.innerWidth <= 770;
  //   if(!this.isMobileView){
  //     this.showNavItems = true;
  //   }
  // }

  // toggleNav(){
  //   this.showNavItems = !this.showNavItems;
  // }

}
