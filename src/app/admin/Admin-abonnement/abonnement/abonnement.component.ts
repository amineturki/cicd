import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from 'src/app/abonnement';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AbonnementService } from 'src/app/abonnement.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  ELEMENT_DATA!: Abonnement[];
  displayedColumns: string[] = ['id', 'typeAbonnement', 'nombreAnnonce', 'Action'];
  dataSource = new MatTableDataSource<Abonnement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private service: AbonnementService,private router:Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }

  public getAllReports() {
    let resp = this.service.getAllAbonnements();
    resp.subscribe(report => this.dataSource.data = report as Abonnement[])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public deleteAbonnement(id: number) {
    let resp = this.service.deleteAbonnement(id);
    resp.subscribe((data) =>  data)
    location.reload();

  }
  public redirect (){
    this.router.navigate(['broker/abonnement/add'])
  }

}
