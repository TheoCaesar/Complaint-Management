import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintsServiceService } from 'src/app/services/complaints-service.service';
import { Complaint, Status } from 'src/app/models/complaints';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  showFormPopup = false;
  showConfirmationPopup = false;
  data!:Complaint[];
  currentPage !: number;
  itemsPerPage  = 8;
  totalItems !:number;
  @Output() complaintsMetaData= new EventEmitter();
  urlPath !: string;
  formAction :string = 'add';
  complaint !: Complaint ;
  allComplaints !: Complaint[];
  complaintStatuses !:any[];

  complaintForm =  new FormGroup({
    subject: new FormControl(''),
    description: new FormControl(''),
    evidence:new FormControl(""),
    witness:new FormControl(""),
    previousComplaint: new FormControl(""),
    referenceNumber: new FormControl(""),
    desiredOutcome: new FormControl(""),
    otherOutcome: new FormControl(""),
    contactMethod: new FormControl(""),
    additionalInfo: new FormControl(""),
  })

  constructor(private complaintStatusService:ComplaintStatusService,
    private complaintService:ComplaintsServiceService,private notification: ToastrService,
    private route:ActivatedRoute, private router: Router
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
      this.itemsPerPage = +params['limit'] || 8;
      this.onGetComplaintsData(this.currentPage);
      this.onGetComplaintStatus();
      console.log(this.data)
    })
    this.urlPath = this.router.url;
  }



  onGetComplaintStatus(){
    this.complaintStatusService.getAllStatuses().subscribe({
      next:(response) => {
        this.complaintStatuses = response;
      },
      error: (err)=> this.notification.error('Something went wrong', 'Try again'),
      complete:() => {
        if (this.complaintStatuses) {
          this.complaintService.getAllComplaints().subscribe( response => {
            this.allComplaints = response;
            this.complaintStatuses.forEach(
              (status) => {
                let complaintsByStatus = this.allComplaints.filter((complaint)=>complaint.status == status.name)
                status.count = complaintsByStatus.length
              }
            )
          })
        }
      }
    })
  }


  successNotification(){
    this.notification.success("Entry submitted successfully")
  }

  errorNotification(error:string){
    this.notification.error((error) ? error : "Please try again")
  }

  warningNotification(){
    this.notification.warning("Something went wrong...")
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
  togglePopup(type: string) {
    (type == 'form') ?
      this.showFormPopup = !this.showFormPopup  :
      this.showConfirmationPopup = !this.showConfirmationPopup;
  }

  addComplaint() {
    this.formAction = 'add';
    this.complaintForm.reset();
    this.togglePopup("form");
  }

  editComplaint(id:number | string){
    this.formAction = "edit"

    //get complaint for editing
    this.complaintService.getComplaint(id).subscribe({
      next: (response)=> this.complaint = response,
      error: (err) =>  console.log(err),
      complete: ()=>{
        console.log("got complaint for editing");
        this.complaintForm = new FormGroup({
          subject: new FormControl(this.complaint.subject),
          description: new FormControl(this.complaint.description),
          evidence:new FormControl(this.complaint.evidence),
          witness:new FormControl(this.complaint.witness),
          previousComplaint: new FormControl(this.complaint.previousComplaint),
          referenceNumber: new FormControl(this.complaint.referenceNumber),
          desiredOutcome: new FormControl(this.complaint.desiredOutcome),
          otherOutcome: new FormControl(this.complaint.otherOutcome),
          contactMethod: new FormControl(this.complaint.preferredContactMethod),
          additionalInfo: new FormControl(this.complaint.additionalInfo),
        })
        this.togglePopup("form");
      }
    })
  }

  getComplaint(id:number|string){
    this.complaintService.getComplaint(id).subscribe({
      next: (response)=> {
        this.complaint = response;
        this.togglePopup('confirm')
      },
      error:(err)=>this.notification.error('Something went wrong...'),
    })
  }

  deleteComplaint(id:number | string){
      this.complaintService.deleteComplaint(id).subscribe((response)=>{
        this.togglePopup('confirm')
        this.notification.success('Complaint deleted successfully');
      },
      (error) => this.notification.error('Complaint deletion unsuccessful')
    )
  }

  submitComplaint() {
    let complaint:Complaint;
    if (this.formAction == 'add') {
      let varId = new Date().getTime()
      complaint =  {
        id: varId,
        reporter: 'Samaria Obeng',
        complaintID: 'comp',
        incidentDate: new Date().toDateString(), //replace with calendar
        category: 'speak to HR',
        priority: 'high',
        turnaroundTime: 30,
        status: "new",
        solution: "NA",
        ...this.complaintForm.value
      }
      this.complaintService.postComplaint(complaint).subscribe({
        next: (response)=>{
          this.successNotification();
          this.complaintForm.reset();
        },
        error: (err)=>{
          console.log("error" , err);
        },
        complete: ()=>{console.log("Done submitting complaint...")}
      })
    }
    else {
      complaint = {
        ... this.complaint,
        ... this.complaintForm.value
      }
      this.complaintService.putComplaint(complaint.id, complaint).subscribe({
        next: (response) => {
          this.notification.success('Complaint updated successfully');
          this.togglePopup("form")
          this.router.navigateByUrl('/complaints')
        },
        error: (err)=> this.notification.error(err),
        complete: () => console.log('completed edit')
      })
    }
  }
}
