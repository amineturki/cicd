import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/customer-service.service';

@Component({
  selector: 'app-updatecustomer-details',
  templateUrl: './updatecustomer-details.component.html',
  styleUrls: ['./updatecustomer-details.component.css']
})
export class UpdatecustomerDetailsComponent implements OnInit {

  custId:number
  customer:any;
  pass:string;
  constructor(private actRouter:ActivatedRoute, private cService:CustomerServiceService, private router:Router) { }

  ngOnInit(): void {
    this.custId=this.actRouter.snapshot.params['userid'];
    this.cService.getCustomerById(this.custId).subscribe(data=>{
      this.customer=data
    })
  }


  updateCustomer(){
    this.custId=this.actRouter.snapshot.params['userid'];
    this.cService.updateCustomerblock(this.customer,this.custId).subscribe(res=>{
      this.router.navigate(['/admin/customer/all']);
      alert("Customer details updated succesfully!")
    }, err=>{
      console.log(err);
    }
    );
  }


  
  updateCustomer2(){
    this.cService.updateCustomer(this.customer).subscribe(res=>{
      this.router.navigate(['/admin/customer/all']);
      alert("Customer details updated succesfully!")
    }, err=>{
      console.log(err);
    }
    );
  }

}
