import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.services';
import { User } from '../../models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    name :null,
    lastName :null,
    tipoIdenID :0,
    indentityNumber :0,
    password :null,
    email :null,
  };

  public tipoDocList: any;
  public validEmail: boolean;
  public validPass: boolean;
  RegisterIsOk = false;

  

  constructor(private service:UserService) {
    this.validEmail=true;
    this.validPass=true;
   }

  ngOnInit(): void {
    this.tipoDoc();
  }

  onSubmit(): void {
   
    this.service.register(this.form).subscribe({
      next: data => {
        if(data.sucess){
          this.RegisterIsOk= true;
        }

      },
      error: err => {
        console.log(err);
      }
    });
  }

  tipoDoc():void{
    this.service.tipoDoc().subscribe({
      next: data => {
        if(data.sucess){
          this.tipoDocList = data.data;
          console.log(this.tipoDocList);
        }
      },
      error: err => {
        
      }
    });
  }

  onChangeEmail(newValue: string) {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
        this.validEmail = true;
    }else {
      this.validEmail = false;
    }

  }

  onChangePass(newValue: string) {
    
    if (newValue.length>=8) {
        this.validPass = true;
    }else {
      this.validPass = false;
    }

  }

}
