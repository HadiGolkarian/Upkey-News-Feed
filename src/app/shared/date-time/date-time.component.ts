import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
})
export class DateTimeComponent implements OnInit {
  @Input() date: Date;
  constructor() {}

  ngOnInit(): void {}
}
