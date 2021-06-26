import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarComponent } from './avatar/avatar.component';
import { ButtonComponent } from './button/button.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AvatarComponent,
    ButtonComponent,
    DateTimeComponent,
    TimeAgoPipe,
  ],
  exports: [
    CommonModule,
    AvatarComponent,
    ButtonComponent,
    DateTimeComponent,
    TimeAgoPipe,
  ],
})
export class SharedModule {}
