import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
})
export class DateTimeComponent implements OnInit {
  public hovered = false;

  @Input() date: Date;
  @HostListener('mouseover') mouseOver(): void {
    this.hovered = true;
  }
  @HostListener('mouseout') mouseOut(): void {
    this.hovered = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
