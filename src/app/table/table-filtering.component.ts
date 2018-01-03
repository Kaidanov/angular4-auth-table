import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from './table-filtering.service';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table-filtering',
  styleUrls: ['table-filtering.component.css'],
  templateUrl: 'table-filtering.component.html',
})
export class TableFilteringComponent {
  displayedColumns: any[];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dataService: DataService) {
    this.displayedColumns = ['position', 'name', 'email', 'cellphone', 'phone', 'company_name', 'job', 'history'];
    // const data: any = dataService.getData();
    // console.log(data);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA); //ELEMENT_DATA

  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }


const ELEMENT_DATA: any[] = [
  {
    name: 'צבי קיידנוב',
    email: 'tzvi.kaidanov@gmail.com',
    cellphone: '+972525951840',
    phone: '+972525951840',
    company_name: 'WiseApp',
    job: 'CTO',
    history: 'כנס תמא'
  }

];
