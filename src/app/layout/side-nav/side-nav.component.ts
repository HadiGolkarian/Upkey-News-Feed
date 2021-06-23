import { Component, OnInit } from '@angular/core';
import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  providers: [SideNavService],
})
export class SideNavComponent implements OnInit {
  constructor(private sideNavService: SideNavService) {}

  ngOnInit(): void {
    this.sideNavService.getUsers().subscribe((users) => console.log(users));
  }
}
