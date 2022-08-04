import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditService } from '../../credit.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class updateComponent implements OnInit {

  CreditForm: FormGroup;

  creditformula:any = [];
  credits:any = [];
  creditformulas:any = [];


  success:boolean = false;
  error:boolean = false;

  constructor(private fb: FormBuilder, private CreditService: CreditService) { }

  ngOnInit(): void {
    this.CreditForm = this.fb.group({
      id: ['', Validators.required],
      creditformula_id: ['', Validators.required]
    })
    this.getIdsFormula();
    this.getIdscredits();
    this.getFormulas();

  }
  getFormulas() :any{
    this.CreditService.getFormulas().subscribe(data => this.creditformulas = data , err => console.log(err));
  }
  get id() {
    return this.CreditForm.get('id')
  }

  get creditformula_id() {
    return this.CreditForm.get('creditformula_id')
  }


  getIdsFormula(){
    this.CreditService.getFormulas().subscribe(data => {
      this.creditformula = data.map((e)=>{
        return e.id;
      });
    }, err => {
      console.log(err);
    })
  }
  getIdscredits(){
    this.CreditService.getCredits().subscribe(data => {
      this.credits = data.map((e)=>{
        return e.id;
      });
    }, err => {
      console.log(err);
    })
  }
  updateCredit(){
    this.CreditService.updateCredit(this.CreditForm.value.id,this.CreditForm.value.creditformula_id).subscribe(()=> this.success=true , err => this.success=true);
  }

}
