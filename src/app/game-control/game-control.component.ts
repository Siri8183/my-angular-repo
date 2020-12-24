import { Component, OnInit, Output,EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {   
  constructor() { }

  ngOnInit() {
  }
  @Output() emitCount= new EventEmitter<number>();
  @Output() emitRestart=new EventEmitter<string>();
  startCounter;
  count=0;
  handleStart(){
    this.startCounter=setInterval(()=>{ this.emitCount.emit(this.count++);},1000);
   
  }
  handlePause(){
    clearInterval(this.startCounter);
  }
  handleRestart(){
    this.startCounter=null;
    this.count=0;
    this.emitRestart.emit("restart");
    this.handleStart();
    
    
  }
}
