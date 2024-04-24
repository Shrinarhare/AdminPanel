import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any= FormGroup;

  constructor(private route:Router, private formBuilder:FormBuilder, private adminservices:AdminService, private fb: FormBuilder){}
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:[null],
      password:[null]
    })

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  




  login() {
    var formData=this.loginForm.value;
    var data={
      username:formData.username,
      password:formData.password
    }

    this.adminservices.login(data).subscribe((response:any)=>{
      this.route.navigate(['dashboard'])
    
    }
    ,(error)=>
      {
        if(error.error?.message)
        {
          alert("incorrect username or password")
        }else
        {
          alert(error)
        }
      })

    
  }
}
