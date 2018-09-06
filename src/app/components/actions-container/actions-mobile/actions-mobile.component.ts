import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actions-mobile',
  templateUrl: './actions-mobile.component.html',
  styleUrls: ['./actions-mobile.component.css']
})
export class ActionsMobileComponent implements OnInit {

  @Input() list:any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
