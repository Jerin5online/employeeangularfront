import { Component } from '@angular/core';
import { employee } from '../employee.model';
import { AdminapiService } from '../services/adminapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

employee : employee = {}

constructor(private api:AdminapiService){}

cancelEmployee(){
  this.employee = {}
}
addEmployee(){
  if(!this.employee.name || !this.employee.id || !this.employee.email || !this.employee.status){
  console.log(this.employee);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Please fill the form Completly`,
    });

  }
  else{
    this.api.addEmployeeApi(this.employee).subscribe({
      next:(res:employee)=>{
       console.log(res);
       Swal.fire({
         icon: 'success',
         title: 'Added Successful',
         text: `${res.name} addedd Successfully`,
       });
   
      } ,error:(err:any)=>{
       console.log(err);
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: `Failed`,
       });
       
      }
     })
  }

  
}
}
