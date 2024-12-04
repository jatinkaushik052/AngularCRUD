import { Component,OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
 constructor(private router: Router){}
  userList: any = [];

  ngOnInit():void{
    const localData= localStorage.getItem('userList')
    if(localData !== null){
      this.userList= JSON.parse(localData)
    }
  }

  onEdit(id: number){
    this.router.navigate(['/adduser', id] )
  }
  onDelete(id: number){
    debugger;
      const index= this.userList.findIndex((m:any)=> m.id == id)
      this.userList.splice(index,1)
     localStorage.setItem('userList',JSON.stringify(this.userList))

  }
}
