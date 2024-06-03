import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() clickedPage = new EventEmitter<number>()
  @Input() getTotalItems !: number;
  pageTabs !: number[];
  totalPages!: number;
  currentPage!:number;
  itemsPerPage !:number;

  constructor(private dataService:DataService,
    private route:ActivatedRoute, private router: Router ) {
  }

  ngOnInit(): void {
    this.setPrerequisites();
  }

  setPrerequisites() {
    this.currentPage = parseInt(this.route.snapshot.queryParams.page);
    this.itemsPerPage = parseInt(this.route.snapshot.queryParams.limit);
    this.totalPages = this.getTotalItems/this.itemsPerPage;
    this.pageTabs = (this.totalPages < 5)
                      ? Array.from({length:this.totalPages}, (_, i)=> i + 1)
                      : Array.from({length:5}, (_, i)=> i + 1);
  }

  onPageChange(page:number): void{
    console.log(`switching to page  ${page} from page ${this.currentPage}`);
    this.currentPage = page;
    this.clickedPage.emit(page);
  }
}