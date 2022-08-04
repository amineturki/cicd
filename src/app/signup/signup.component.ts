import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrokerServiceService } from 'src/app/broker/broker-service.service';
import { CustomerServiceService } from '../customer-service.service';
import { FileService } from 'src/app/file.service';
import { UserServiceService } from 'src/app/user-service.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  
  constructor(private fb:FormBuilder, private bService:BrokerServiceService, private fileService: FileService,private cService:CustomerServiceService, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      agentName: [''],
      clientName: [''],
      username: ['', [Validators.required, Validators.pattern("[a-zA-Z]{3,}$")]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      city:['',Validators.required],
      Role:['',Validators.required],
      image:['',Validators.required],

    })
  }
  get image(){
    return this.signupForm.get('image');
  }

  get username(){
    return this.signupForm.get('username');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get mobile(){
    return this.signupForm.get('mobile');
  }
  get city(){
    return this.signupForm.get('city');
  }
  get Role(){
    return this.signupForm.get("Role");
  }

  

  onUploadFiles(files: File[]): void {
    const formData = new FormData();

   // document.getElementById("file-id").files[0].name; 
//   document.getElementById('file-id').value;



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

  imageShow: any= '';
  file: any= '';

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

  signup(){
    console.log(this.signupForm.value)
    this.signupForm.value.image=this.file.name;
    if(this.signupForm.value.Role=="customer"){

      this.signupForm.value.clientName=this.signupForm.value.name
      this.cService.addCustomer(this.signupForm.value).subscribe(res => {
        console.log(res)
        this.router.navigate(['login'])
        alert("You have succesfully registered as Customer");
      }, err=>{
        alert("User with this Email or Mobile number already exists. Try with different details");
      })
    }
    else if( this.signupForm.value.Role=="broker"){
      this.signupForm.value.agentName=this.signupForm.value.name
      this.bService.addBroker(this.signupForm.value).subscribe(res=>{
        console.log(res)
        this.router.navigate(['login'])
        alert("You have succesfully registered as Broker");
      }, err=>{
        alert("User with this Email or Mobile number already exists. Please try with different details");
      })
    }
    
  }

}
