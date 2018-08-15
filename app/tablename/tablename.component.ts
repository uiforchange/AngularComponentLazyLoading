import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablenameDataSource } from './tablename-datasource';

@Component({
  selector: 'app-tablename',
  templateUrl: './tablename.component.html',
  styleUrls: ['./tablename.component.css']
})
export class TablenameComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TablenameDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TablenameDataSource(this.paginator, this.sort);
  }
}
