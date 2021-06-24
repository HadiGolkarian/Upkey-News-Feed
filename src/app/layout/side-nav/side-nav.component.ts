import { Component, OnInit } from '@angular/core';
import { User } from '@app/abstractions/users/user.model';
import { Observable } from 'rxjs';
import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  providers: [SideNavService],
})
export class SideNavComponent implements OnInit {
  public $users: Observable<User[]>;

  constructor(private sideNavService: SideNavService) {}

  ngOnInit(): void {
    this.$users = this.sideNavService.getUsers();
  }
}
