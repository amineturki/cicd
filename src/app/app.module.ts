import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrokerComponent } from 'src/app/broker/broker.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupComponent } from './signup/signup.component';
import { PropertySearchComponent } from './customer/property-search/property-search.component';
import { UpdateComponent } from './broker/update/update.component';
import { APP_BASE_HREF } from '@angular/common';
import { MyPropertiesComponent } from './customer/my-properties/my-properties.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { AvailablePropPipe } from './available-prop.pipe';
import { OfferPipe } from './offer.pipe';
import { DealComponent } from './customer/deal/deal.component';
import { AllPropertyByCriteriaComponent } from './customer/all-property-by-criteria/all-property-by-criteria.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllBrokersComponent } from './broker/all-brokers/all-brokers.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreateComponent } from 'src/app/broker/create/create.component';
import { UpdateMypropsComponent } from './broker/update-myprops/update-myprops.component';
import { UpdateUserComponent } from './broker/update-user/update-user.component';
import { MyPropertiesComponentB } from './broker/my-properties/my-properties.component';
import { CreatePropertiesComponent } from './broker/create-properties/create-properties.component';
import { AdminComponent } from './admin/admin.component';
import { AdminBrokerComponent } from './admin/admin-broker/admin-broker.component';
import { AdminCustomerComponent } from './admin/admin-customer/admin-customer.component';
import { AdminDealComponent } from './admin/admin-deal/admin-deal.component';
import { AdminPropertyComponent } from './admin/admin-property/admin-property.component';
import { AllPropertiesComponent } from './all-properties/all-properties.component';
import { UpdateMypropsComponentA } from './admin/admin-property/update-myprops/update-myprops.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AllCustomersComponent } from './customer/all-customers/all-customers.component';
import { UpdatecustomerDetailsComponent } from './admin/admin-customer/updatecustomer-details/updatecustomer-details.component';
import { UpdatebrokerDetailsComponent } from './admin/admin-broker/updatebroker-details/updatebroker-details.component';
import { AddCustomerComponent } from './admin/admin-customer/add-customer/add-customer.component';
import { DevelopersComponent } from './developers/developers.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddAbonnementComponent } from './admin/add-abonnement/add-abonnement.component';
import { AbonnementComponent } from './admin/Admin-abonnement/abonnement/abonnement.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { AdminReclamationComponent } from './reclamation/admin-reclamation/admin-reclamation.component';
//import { ListReclamationComponent } from './reclamation/list-reclamation/list-reclamation.component';

import { ListReclamationComponent } from './admin/list-reclamation/list-reclamation.component';

import { CreditComponent } from 'src/app/credit/credit.component';
import { AddComponent } from 'src/app/credit/add/add.component';
import { CreditListComponent } from 'src/app/credit/credit-list/credit-list.component';
import { updateComponent } from 'src/app/credit/update/update.component';
import { ChartsModule } from 'ng2-charts';
import { MydealComponent } from './broker/mydeal/mydeal.component';
//import { AbonnementComponent } from './admin/Admin-abonnement/abonnement/abonnement.component';
//import { CreditListComponent } from 'src/app/credit/credit-list/credit-list.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrokerComponent,
    CustomerComponent,
    SignupComponent,
    PropertySearchComponent,
    UpdateComponent,
    MyPropertiesComponent,
    AllPropertyByCriteriaComponent,
    UpdateCustomerComponent,
    AvailablePropPipe,
    OfferPipe,
    DealComponent,
    HomeComponent,
    NavbarComponent,
    AllBrokersComponent,
    CreateComponent,
    UpdateMypropsComponent,
    UpdateUserComponent,
    MyPropertiesComponentB,
    CreatePropertiesComponent,
    AdminComponent,
    AdminBrokerComponent,
    AdminCustomerComponent,
    AdminDealComponent,
    AdminPropertyComponent,
    AllPropertiesComponent,
    UpdateMypropsComponentA,
    FooterComponent,
    AllCustomersComponent,
    UpdatecustomerDetailsComponent,
    UpdatebrokerDetailsComponent,
    AddCustomerComponent,
    DevelopersComponent,
    AboutComponent,
    ContactComponent,
    AddAbonnementComponent,
    AbonnementComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent,
    AdminReclamationComponent,
    ListReclamationComponent,
    CreditComponent,
    updateComponent,
    CreditListComponent,
    AddComponent,
    MydealComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    ChartsModule,
    

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
