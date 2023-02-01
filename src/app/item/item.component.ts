import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() arra: any[]=[]
  
  @Output() eve = new EventEmitter()
  
  clickingup(){
    this.eve.emit(0)
    
  }
  clickingup1(){
    this.eve.emit(1)
    
  }
  clickingup2(){
    this.eve.emit(2)
    
  } 

}
