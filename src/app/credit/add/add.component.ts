import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditService } from '../../credit.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  CreditForm: FormGroup;

  creditformula:any = [];
  creditformulas:any = [];

  success:boolean = false;
  error:boolean = false;

  constructor(private fb: FormBuilder, private CreditService: CreditService) { }

  ngOnInit(): void {
    this.CreditForm = this.fb.group({
      initialamount: ['', Validators.required],
      creditformula_id: ['', Validators.required]
    })
    this.getIdsFormula();

    this.getFormulas();


  }
  getFormulas() :any{
    this.CreditService.getFormulas().subscribe(data => this.creditformulas = data , err => console.log(err));
  }

  get initialamount() {
    return this.CreditForm.get('initialamount')
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
  addCredit(){
    this.CreditService.addCredit('{"initialamount" : '+ this.CreditForm.value.initialamount + '}',this.CreditForm.value.creditformula_id).subscribe(()=> this.success=true , err => this.success=true);
  }

}
