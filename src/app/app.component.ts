import { Component } from '@angular/core'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project';
   oddnums:number[]=[];
   evennums:number[]=[];
 constructor(){
   } 
   onEmitCount(e:number){
    if(e%2==0)
    this.evennums.push(e);
    else
    this.oddnums.push(e);
   }

   onRestart(){
     this.oddnums=[];
     this.evennums=[];
   }
   
  
}
