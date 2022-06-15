import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusComponent } from './component/statusComponent/status/status.component';
import { UserComponent } from './component/userComponent/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
