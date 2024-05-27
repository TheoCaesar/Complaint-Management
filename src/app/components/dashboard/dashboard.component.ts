import { Category } from './../../models/complaints';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories = [{name:'service request', count:4}, {name:'office matters', count:12}, {name:'employee relations', count:8}, {name:'other', count:6}]
  statuses = [{name:'new', count:4}, {name:'open', count:12}, {name:'in progress', count:8}, {name:'closed', count:6}, {name:'overdue', count:16}]
  responses = [{name:'phone', count:28}, {name:'email', count:42}]
  constructor() { }

  ngOnInit(): void {
  }

}
