import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule ,
  MatInputModule,
  MatPaginatorModule ,
  //MatTableDataSource,
  //MatPaginator,
  //MatSort
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule ,
    MatInputModule,
    MatPaginatorModule 
    //MatTableDataSource,
    //MatPaginator,
    //MatSort
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule ,
    MatInputModule,
    MatPaginatorModule,
    //MatTableDataSource,
    //MatPaginator,
    //MatSort
  ]
})
export class MaterialModule {}
