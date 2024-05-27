import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './nav.comp.css']
})
export class HomeComponent implements OnInit {
  extendSidebar = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(state: boolean): void {
    this.extendSidebar = state;
  }

}
