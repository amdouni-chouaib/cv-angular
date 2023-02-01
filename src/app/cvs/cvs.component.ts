import { Component } from '@angular/core';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})
export class CvsComponent {
  index:any
arr =[
  {
    image:"https://i.pinimg.com/736x/3c/78/23/3c7823556c00666370fc84e6aa3d135b.jpg",
    fullname:"chouaib amdouni",
    title:"DevOps Engeneering",
    experience:"2 years"
  },
  {
    image:"https://images.unsplash.com/photo-1623230590824-f39e31a0a608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    fullname:"ahmed amdouni",
    title:"Cloud Computing ",
    experience:"3 years"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9slRNbLUm8sxuKYBzw6pCroeq9SQSTigZii1KtxF&s",
    fullname:"baraa amdouni",
    title:"SysOps Engeneering",
    experience:"4 years"
  }
]
c2(res:any){
this.index=res
}




}
