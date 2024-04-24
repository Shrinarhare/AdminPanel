import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from './main-dashboard/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainDashboardComponent,
    DashboardComponent,
    CustomerComponent,
    ProductComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'customers', component: CustomerComponent },
      { path: 'products', component: ProductComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: '', redirectTo: '/customers', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
