import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-json-server',
  templateUrl: './crud-json-server.component.html',
  styleUrls: ['./crud-json-server.component.css'],
})
export class CrudJsonServerComponent implements OnInit {
  selectedTab: string = '';
  constructor() {}

  ngOnInit(): void {}

  selectedTabIndex(event: any) {
    this.selectedTab = event.tab.textLabel;
  }
}
