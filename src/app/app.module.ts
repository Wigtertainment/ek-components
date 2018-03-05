import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderModule } from './modules/header/header.module';
import { AppComponent } from './app.component';
import { EkSearchBarModule } from './modules/ek-search-bar/ek-search-bar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EkSearchBarModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
