import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifComponent } from './gif/gif.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemsComponent } from './menuitems/menuitems.component';

@NgModule({
  declarations: [
    AppComponent,
    GifComponent,
    MenuComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
