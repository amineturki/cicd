import { HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/customer-service.service';
import { DealServiceService } from 'src/app/deal-service.service';
import { FileService } from 'src/app/file.service';
import { UserServiceService } from 'src/app/user-service.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  properties:any;
  constructor(private cService:CustomerServiceService, private uService:UserServiceService, private dService:DealServiceService,private fileService: FileService) { }

  ngOnInit(): void {
    this.dService.getAllDeals().subscribe(data=>{
      this.properties=data
    })
  }

  delete(id:number){
    if(confirm("Are you sure you want to delete?")){
      this.dService.deleteDeal(id).subscribe(data=>{
        this.ngOnInit();
      });
    }
    else{
      this.ngOnInit();
    }
    
  }

  onUploadFiles(files: File[],id:number): void {
    const formData = new FormData();
    for(const file of files) {
       formData.append('files', file, file.name);
  }
  this.fileService.upload(formData,id).subscribe(
    event => {
      console.log(event);
      this.resportProgress(event);
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );
  }

  onDownloadFiles(filename: string): void {
  this.fileService.download(filename).subscribe(
    event => {
      console.log(event);
      this.resportProgress(event);
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );
  }


  private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                  {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
        default:
          console.log(httpEvent);
          break;
      
    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }


}

