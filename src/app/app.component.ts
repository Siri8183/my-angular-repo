import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project';
  show=true;
  count=0;
  items=[];
  showText(){
   this.show=!this.show;
  this.items.push(new Date());

  }
}
