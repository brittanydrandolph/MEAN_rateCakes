import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent implements OnInit {

  @Input() cakesToShow: any;
  @Input() avgRating: any;

  constructor() { }

  ngOnInit() {
  }

}
