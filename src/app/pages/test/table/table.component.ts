import {Component, EventEmitter, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Http} from "@angular/http";
import {TableService} from "./table.service";
import {RecordModel} from "./table.model";
import {Grid} from "ng2-smart-table/lib/grid";
import {Row} from "ng2-smart-table/lib/data-set/row";
import {Observable} from "rxjs/Observable";
import {query} from "@angular/animations";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  settings = {
    // hideHeader: true,
    hideSubHeader: true,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmAdd: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmEdit: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      user_id: {
        title: '用户编号',
        type: 'number',
      },
      category_id: {
        title: '业务分类',
        type: 'number',
      },
      content: {
        title: '内容',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  posts: RecordModel[];
  constructor(private tableService: TableService,private http: Http) {
    const data = this.tableService.getData();
    this.source.load(data);
    // this.source=new LocalDataSource(this.posts);
  }
  onSearch(event): void {
    console.log('onSearch');
  }
  delete(r:RecordModel): void {
    console.log('delete');
    console.log(r);
  }
  edit(r:RecordModel): void {
    console.log('edit');
    console.log(r);
  }
  getPosts(): void {
    this.tableService
      .getPosts()
      .then(posts => this.posts = posts);
  }
  ngOnInit() {
    this.getPosts();
  }
}
