import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Abonnement } from 'src/app/abonnement';
import { AbonnementService } from 'src/app/abonnement.service';


@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.css']
})
export class AddAbonnementComponent implements OnInit {

  Abonnement: any = new Abonnement(4,5,"","");
  message: any;

  constructor(private service: AbonnementService,private router:Router) { }

  ngOnInit(): void {
  }
  onClickSubmit() {
    
    //this.Abonnement = new Abonnement("", data.nbrAnnonce, data.libelle,data.prix);
    let resp = this.service.AddAbonnement(this.Abonnement);
    resp.subscribe((data) => this.message = data);

    this.router.navigate(['admin/abonnement'])
  }

  
  
}
