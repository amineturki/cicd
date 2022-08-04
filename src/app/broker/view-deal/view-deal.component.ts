import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DealServiceService } from 'src/app/deal-service.service';

@Component({
  selector: 'app-view-deal',
  templateUrl: './view-deal.component.html',
  styleUrls: ['./view-deal.component.css']
})
export class ViewDealComponent implements OnInit {
  dealId:number;
  deal:any;
  constructor(private actRouter:ActivatedRoute,private dService:DealServiceService) { }

  ngOnInit(): void {
    this.dealId=this.actRouter.snapshot.params['dealId'];
    this.dService.getDealById(this.dealId).subscribe(data => {
      console.log(data)
      this.deal=data
    })
  }
}
