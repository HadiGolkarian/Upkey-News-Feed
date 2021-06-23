import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryData } from './dataServices/base/in-memory-data';
import { UsersDataService } from './dataServices/users/users-data.service';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryData),
  ],
  providers: [UsersDataService],
})
export class CoreModule {}
