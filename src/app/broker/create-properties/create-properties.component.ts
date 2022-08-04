import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyServiceService } from 'src/app/property-service.service';
import { UserServiceService } from 'src/app/user-service.service';
import { Broker } from '../broker';
import { BrokerServiceService } from '../broker-service.service';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';

@Component({
  selector: 'app-create-properties',
  templateUrl: './create-properties.component.html',
  styleUrls: ['./create-properties.component.css']
})
export class CreatePropertiesComponent implements OnInit {
  propForm:FormGroup;
  agent:any;
  fileService: any;
  constructor(private fb: FormBuilder,private uService:UserServiceService,private bService:BrokerServiceService, private pService: PropertyServiceService, private router:Router) { }

  ngOnInit(): void {
    const autocomplete = new GeocoderAutocomplete(
      document.getElementById('autocomplete'),
      '067d039a00d245019a1a8e4be86031f8',
      { /* Geocoder options */
        skipIcons: true,
        placeholder: 'Enter keywords to get address suggestions and choose the correct one'
      });
    autocomplete.addFilterByCountry(['tn']);
    this.agent={userId:this.uService.getId()}
    this.propForm = this.fb.group({
      configuration:['',Validators.required],
      offerType: ['', Validators.required],
      offerCost: ['', [Validators.required, Validators.pattern("[0-9]{3,}")]],
      areaSqft:['', [Validators.required, Validators.pattern("[0-9]{2,10}")]],
      city:['', Validators.required],
      address:['', Validators.required],
      street:['', Validators.required],
      status:['', Validators.required],
      image:['',Validators.required],

      agent: [this.agent]
    })
  }
  get image(){
    return this.propForm.get('image');
  }
  get configuration(){
    return this.propForm.get('configuration');
  }
  get offerType(){
    return this.propForm.get('offerType');
  }
  get offerCost(){
    return this.propForm.get('offerCost');
  }
  get areaSqft(){
    return this.propForm.get('areaSqft');
  }
  get city(){
    return this.propForm.get('city');
  }
  get address(){
    return this.propForm.get('address');
  }
  get street(){
    return this.propForm.get('street');
  }
  get status(){
    return this.propForm.get('status');
  }

  file: any= '';
  regProperty(){
    this.propForm.value.image=this.file.name;

    this.pService.addProperty(this.propForm.value).subscribe(res => {
      console.log(res)
      this.router.navigate(['broker/myprops'])
    }, err=>{
      console.log(err);
    });
  }

  onUploadImage(files: File[]): void {
    const formData = new FormData();
    for(const file of files) {
       formData.append('files', file, file.name);
  }
  this.fileService.uploadA(formData).subscribe(
    event => {
      console.log(event);
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );
  }
  imageShow: any= '';

  onFileChanged(event,files: File[]) {
    this.file = event.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
     this.imageShow = (<FileReader>event.target).result;
     console.log(this.file.name);
   }
   const formData = new FormData();
  
   for(const file of files) {
    formData.append('files', file, file.name);
  }
   this.fileService.uploadA(formData).subscribe(
    event => {
      console.log(event);
      //this.resportProgress(event);
    },
   
  );
  }
  

}
