import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title = 'Products';
  productForm: any = FormGroup;
  updateForm: any = FormGroup;
  imageUrl: string | undefined;
  imageUrl_2: string | undefined;
  mydata:any={}
  photo:string | undefined

  constructor(
    private route: Router,
        private adminservices: AdminService,
    private formbuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.productForm = this.formbuilder.group({
      name: [null],
      price: [null],
      quantity: [null],
      image: [null],
      description: [null],
    });

    this.updateForm = this.formbuilder.group({
      id:[null],
      name: [null],
      price: [null],
      quantity: [null],
      image_one: [null],
      description: [null],
    });
  }

  addProduct() {
    const formdata = this.productForm.value;
    
    var data = {
      name: formdata.name,
      price: formdata.price,
      quantity: formdata.quantity,
      image: formdata.image, //new Change
      description: formdata.description,
    };
    this.adminservices.addProduct(data).subscribe(
      (response: any) => {
        alert('data added successfuly!');
      },
      (error) => {
        alert('data is not added');
      }
    );
  }

  showAddForm: boolean = false;
  showUpdateForm: boolean = false;
  showDeleteForm: boolean = false;

  openAddForm() {
    this.showAddForm = true;
    this.showUpdateForm = false;
    this.showDeleteForm = false;
  }

  openUpdateForm() {
    this.showAddForm = false;
    this.showUpdateForm = true;
    this.showDeleteForm = false;
  }

  deleteProductForm() {
    // this.showAddForm = true ;
    this.showUpdateForm = false;
    this.showAddForm = false;
    this.showDeleteForm = true;
  }

  login() {
    this.route.navigate(['dashboard']);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0] as File;
    const img = new Image();
    const reader = new FileReader();
    this.imageUrl = URL.createObjectURL(file);
    if (file) {

      this.productForm.patchValue({
        image: this.imageUrl
      });

      reader.onload = () => {
        this.imageUrl = reader.result as string;
        img.src = reader.result as string
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelectednew(event: any): void {
    const file = event.target.files[0] as File;
    const img = new Image();
    const reader = new FileReader();
    this.imageUrl_2 = URL.createObjectURL(file);
    if (file) {

      this.productForm.patchValue({
        image_one: this.imageUrl_2
      });

      reader.onload = () => {
        this.imageUrl_2= reader.result as string;
        img.src = reader.result as string
      };
      reader.readAsDataURL(file);
    }
  }

  getP()
  {
    const formdata = this.updateForm.value;
    var data = {
      id:formdata.id
    }
    this.adminservices.getP(data.id).subscribe((response:any)=>{
      this.mydata=response
      console.log(this.mydata[0].name)
      this.photo=response[0].image //new change
    },
    (error)=>
      {
        if(error.error?.message)
        {
          alert("Data not found")
        }else
        {
          alert(error)
        }
      })
  }

  // update Form
updateData()
{
  const formdata=this.updateForm.value;
  var data={
    id:formdata.id,
    name: formdata.name,
    price: formdata.price,
    quantity: formdata.quantity,
    image: formdata.image_one, //new Change
    description: formdata.description,
  }
  this.adminservices.updateProduct(data).subscribe((response:any)=>
  {
    alert("Data Updated");
  },(error)=>
    {
      if(error.error?.message)
      {
        alert("Data not found")
      }else
      {
        alert(error)
      }
    })
}
  
}



// export class ProductComponent {
//   title='Products';
//   constructor(private route:Router){}

//   login() {
//     this.route.navigate(['dashboard'])
//   }
//   }
