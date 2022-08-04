import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DealServiceService } from 'src/app/deal-service.service';
import { PropertyServiceService } from 'src/app/property-service.service';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {
  annonceId:number;
  prop:any;
  deal:any;
  constructor(private actRouter:ActivatedRoute,private pService:PropertyServiceService, private dService:DealServiceService, private router:Router, private uService:UserServiceService) { }

  ngOnInit(): void {
    this.annonceId=this.actRouter.snapshot.params['propid'];
    this.pService.getPropertyById(this.annonceId).subscribe(data => {
      console.log(data)
      this.prop=data
    })
  }

  makeDeal(){
    this.deal={
      customer: {
        userId: this.uService.getId()
      },
      achatlocationCost: this.prop.offerCost,
      property: {
        annonceId: this.annonceId
      }
    }
    console.log(this.deal)

    this.dService.addDeal(this.deal,this.annonceId).subscribe(ref => {
      console.log(this.deal)
      this.router.navigate(['customer/myprops/']);
      alert("You have succesfully brought this property")
    })
  }

}
