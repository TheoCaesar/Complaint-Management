import { Category } from './../../models/complaints';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories = [{name:'service request', count:4, iconUrl:'fa fa-wrench maximize'}, {name:'office matters', count:12, iconUrl:'fa fa-institution maximize'}, {name:'employee relations', count:8, iconUrl:'fa fa-wechat maximize'}, {name:'other', count:6, iconUrl:'fa fa-folder-open maximize'}]
  statuses = [{name:'new', count:4, iconUrl:"../../../assets/dash/new-blue-bg.svg"}, {name:'open', count:12, iconUrl:"../../../assets/dash/open-blue-bg.svg"}, {name:'in progress', count:8, iconUrl:"../../../assets/dash/hourglass-blue-bg.svg"}, {name:'closed', count:6, iconUrl:"../../../assets/dash/done-blue-bg.svg"}, {name:'overdue', count:16, iconUrl:"../../../assets/dash/overdue-blue-bg.svg"}]
  responses = [{name:'phone', count:28, iconUrl:'fa fa-phone maximize'}, {name:'email', count:42, iconUrl:'fa fa-envelope maximize'}]
  constructor() { }

  ngOnInit(): void {
  }

}
