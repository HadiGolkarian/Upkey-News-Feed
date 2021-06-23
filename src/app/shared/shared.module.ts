import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarComponent } from './avatar/avatar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AvatarComponent, ButtonComponent],
  exports: [CommonModule, AvatarComponent, ButtonComponent],
})
export class SharedModule {}
