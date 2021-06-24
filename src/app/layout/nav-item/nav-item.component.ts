import { Component, Input, OnInit } from '@angular/core';
import { User } from '@abstractions/users/user.model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}
