import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MemberComponent } from './member/member.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MemberComponent,
    WelcomeComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
