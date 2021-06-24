import { Component, Input, OnInit } from '@angular/core';

export enum AvatarVariants {
  circle = 'circle',
  square = 'square',
}

export enum AvatarSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() imageTitle?: string;
  @Input() variant?: AvatarVariants = AvatarVariants.circle;
  @Input() size?: AvatarSizes = AvatarSizes.small;

  constructor() {}

  getClasses(): any {
    return {
      circle: this.variant === AvatarVariants.circle,
      square: this.variant === AvatarVariants.square,
      small: this.size === AvatarSizes.small,
      medium: this.size === AvatarSizes.medium,
      large: this.size === AvatarSizes.large,
    };
  }

  ngOnInit(): void {}
}
