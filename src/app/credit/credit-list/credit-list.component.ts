import { Component, OnInit } from '@angular/core';
import { CreditService } from '../../credit.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  public credits:any = [];
  constructor( private CreditService: CreditService ) { }

  ngOnInit(): void {
    this.CreditService.getCredits().subscribe(data => this.credits = data , err => console.log(err));
  }

  exportPDF(id){
    this.CreditService.exportPDF(id).subscribe(data => alert("export with success") , err => console.log(err));
  }
  deletecredit(id){
    this.CreditService.deletecredit(id).subscribe(data => alert("delete with success") , err => console.log(err));
    this.CreditService.getCredits().subscribe(data => this.credits = data , err => console.log(err));

  }

}
