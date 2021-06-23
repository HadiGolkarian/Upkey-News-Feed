import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {}

  hanldeClick(e): void {
    this.clicked.emit(e);
  }

  ngOnInit(): void {}
}
