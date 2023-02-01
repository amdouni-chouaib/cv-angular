import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input() arra: any[]=[]
@Output() eve1 = new EventEmitter()
c1(res:any){
this.eve1.emit(res)
}


}
