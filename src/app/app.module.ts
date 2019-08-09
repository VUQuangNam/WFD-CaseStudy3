import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserlistComponent} from './userlist/userlist.component';
import {MessageComponent} from './message/message.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UserComponent} from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    MessageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
