import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  addUserForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    username: new FormControl(),
    email: new FormControl(),
    department: new FormControl()
  })

  userList: any = [];
  currentId: number = 0;
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((res: any) => {
      debugger;
      if (res.id) {
        this.currentId = res.id;
      }
    })
  }


  ngOnInit(): void {
    this.getData();
  }

  // Data fetching form localstorage
  getData() {
    const localData = localStorage.getItem('userList')
    if (localData !== null) {
      this.userList = JSON.parse(localData)
      debugger;
      if (this.currentId !== 0) {

        const currentRecord = this.userList.find((m: any) => m.id === Number(this.currentId))
        if (currentRecord !== undefined) {
          debugger
          this.addUserForm.patchValue({
            username: currentRecord?.username,
            email: currentRecord?.email,
            department: currentRecord?.department
          })

        }
      }
    }
  }

  // Add Data
  onAdd() {
    alert("data save successfullly")
    debugger;
    const payload = {
      id: 0,
      username: this.addUserForm.value?.username,
      email: this.addUserForm.value?.email,
      department: this.addUserForm.value?.department
    }


    // getting data from local storage 
    const localData = localStorage.getItem('userList')
    if (localData == null) { //there is no data
      payload.id = 1
      this.userList.push(payload)
      localStorage.setItem('userList', JSON.stringify(this.userList))
    }
    else {
      const parseData = JSON.parse(localData)
      payload.id = parseData.length + 1
      this.userList.push(payload)
      parseData.push(payload);
      localStorage.setItem('userList', JSON.stringify(parseData))

    }
    // Clear the form fields
    this.addUserForm.reset();

  }

  // Updating data 

  onUpdate() {
    const currentData = this.userList.find((m: any) => m.id == this.currentId)
    if (currentData != undefined) {
      alert("data updated successfully")
      currentData.username = this.addUserForm.get('username')?.value;
      currentData.email = this.addUserForm.get('email')?.value;
      currentData.department = this.addUserForm.get('department')?.value;
    }
    localStorage.setItem('userList', JSON.stringify(this.userList))
  }
}

