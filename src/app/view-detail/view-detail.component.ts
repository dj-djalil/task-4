import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {



  constructor() { }


  ngOnInit(): void {

  }

  receivingDetails! :any ;
  parentFunction(data:any){
    this.receivingDetails={
      firstName : data.firstName,
      lastName : data.lastName,
      email : data.email,
      companyName : data.companyName,
      joiningDate : data.joiningDate,
      roleDescription : data.roleDescription
    }
     console.log(data.email)
  }
}
