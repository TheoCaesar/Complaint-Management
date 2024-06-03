import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintsServiceService } from 'src/app/services/complaints-service.service';
import { Complaint } from 'src/app/models/complaints';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  showPopupForm = false;
  data!:Complaint[];
  currentPage !: number;
  itemsPerPage  = 10;
  totalItems !:number;
  @Output() complaintsMetaData= new EventEmitter();
  urlPath !: string;

  constructor(private complaintService:ComplaintsServiceService,
    private route:ActivatedRoute, private router: Router
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
      this.itemsPerPage = +params['limit'] || 10;
      this.onGetComplaintsData(this.currentPage);
    })
    this.urlPath = this.router.url;
  }



  //paginated data rendering
  onGetComplaintsData(page:number) {
    this.complaintService.getComplaintSet(page, this.itemsPerPage).subscribe(response=>{
      this.data = response;
      this.currentPage = page;
      this.updateQueryParams(page, this.itemsPerPage);
      this.onGetComplaintsMetaData();
    })
  }

  onGetComplaintsMetaData() {
    this.complaintService.getAllComplaints().subscribe(response => {
      this.totalItems = response.length;
    })
  }

  updateQueryParams(page:number, limit:number) {
    this.router.navigate([], {
      relativeTo:this.route,
      queryParams: {page, limit},
      queryParamsHandling:'merge'
    })
  }

  //render complaint form popup
  togglePopup() {
    this.showPopupForm = !this.showPopupForm;
  }
}
