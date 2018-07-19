import { Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { User }    from './user';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private router:Router){

  }

  model = new User('','');
  
  onSubmit() { 
    this.router.navigate(['dashboard']);
   }
  
}