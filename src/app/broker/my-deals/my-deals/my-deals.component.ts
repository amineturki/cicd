import { Component, OnInit } from '@angular/core';
import { DealServiceService } from 'src/app/deal-service.service';
import { saveAs } from 'file-saver';
import { HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { FileService } from 'src/app/file.service';

@Component({
  selector: 'app-my-deals',
  templateUrl: './my-deals.component.html',
  styleUrls: ['./my-deals.component.css']
})
export class MyDealsComponent implements OnInit {
  propertie:any;
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  constructor(private dService:DealServiceService,private fileService: FileService) { }

  ngOnInit(): void {
    this.dService.getAllDeals().subscribe(data=>{
      console.log(data);

      this.propertie=data
      console.log(this.propertie);
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
