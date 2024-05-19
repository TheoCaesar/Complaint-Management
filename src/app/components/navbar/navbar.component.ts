import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  extendNav = false;
  constructor() { }
  ngOnInit(): void {
  }

  toggle() {
    this.extendNav = !this.extendNav;
    console.log("extending nav?", this.extendNav)
  }
}
