import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public height: number;

  constructor() {
    this.onResize(null); 
  }

  //Supported global targets are window, document, and body.
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let tenPercentHeight = (10/100) * window.innerHeight; 
    this.height = window.innerHeight - tenPercentHeight;
  }

}
