import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  title = 'Customers';

  userData:any={

  }

  constructor(private route: Router, private adminservices: AdminService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  login() {
    this.route.navigate(['dashboard']);
  }

  getUsers() {
    this.adminservices.getCustomer().subscribe(
      (response: any) => {
        this.userData=response;
        console.log(response);
      },

      (error) => {
        if (error.error?.message) {
          alert('Customer not found');
        } else {
          alert(error);
        }
      }
    );
  }
}
