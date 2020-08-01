import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { TwitchChatComponent } from './components/twitch-chat/twitch-chat.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TwitchChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
})
export class AppModule {
}
