import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators ,AbstractControl,ValidationErrors, CheckboxControlValueAccessor} from '@angular/forms';


function mustMatch(control:AbstractControl): {[key:string]:any} | null {
  if(control && control.value!== null || control.value !== undefined){
    const confirmPassword = control.value;
    const password = control.root.get('password');
    if(password){
      if(password.value !== confirmPassword ){
        return{ isError :true};
      }
    }

}
return null;
}


@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})

export class AddDetailsComponent implements OnInit {

  @Output() parentFunction : EventEmitter <object> = new EventEmitter
constructor(){}


exform! : FormGroup;



  ngOnInit(): void {

    this.exform = new FormGroup ({
        'firstName' : new FormControl(null, Validators.required),
        lastName : new FormControl(null,  [Validators.required, Validators.maxLength(25)]),
        email : new FormControl(null,[ Validators.required, Validators.email]),
        password : new FormControl(null,Validators.required),
        confirmPassword: new FormControl(null,[Validators.required,mustMatch]),
        companyName : new FormControl(null,Validators.required),
        joiningDate : new FormControl(null,Validators.required),
        roleDescription : new FormControl(null,Validators.required)
      })





}
// disable a future dates
  maxDate  : any =  this.disableFuturDates();
  disableFuturDates() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

   var max :string = yyyy + '-' + mm + '-' + dd;
   console.log(max)
   return max

}

onSubmit(){
 if(this.exform.invalid){
   return ;
 }
console.log(this.exform.value)
this.parentFunction.emit(this.exform.value);
}


}

