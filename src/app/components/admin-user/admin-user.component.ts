import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.services';
import { TokenStorageService } from '../../services/token-storage.service';
import { User } from '../../models/user'

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  form: any = {
    id:0,
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
  isLoggedIn = false;
  isUpdate = false;
  isDelete= false;
  emailSearch='';
  

  constructor(private service:UserService,private tokenStorageService: TokenStorageService) {
    this.validEmail=true;
    this.validPass=true;
   }

  ngOnInit(): void {
    this.tipoDoc();
  }

  filterEmail(newValue: string):void {
    if(newValue.length>3){
      this.service.search(newValue).subscribe({
        next: data => {
          if(data.sucess){

            this.form = data.data;

            console.log(data.data);
          }else{
            this.form={};
          }
        },
        error: err => {
          
        }
      });
    }
  }
  onSubmit(): void {
   
    this.service.update(this.form).subscribe({
      next: data => {
        if(data.sucess){
          this.isUpdate= true;
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

  delete(){
    const {id} = this.form;
    this.service.delete(id).subscribe({
      next: data => {
        if(data.sucess){
          this.isDelete= true;
          this.form={};
        }

      },
      error: err => {
        console.log(err);
      }
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  reloadPage(): void {
    window.location.reload();
  }

}
