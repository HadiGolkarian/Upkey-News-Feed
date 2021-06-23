import { Component, Input, OnInit } from '@angular/core';

export enum AvatarVariants {
  circle = 'circle',
  square = 'square',
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() imageTitle: string;
  @Input() variant?: AvatarVariants = AvatarVariants.circle;

  constructor() {}

  ngOnInit(): void {}
}
