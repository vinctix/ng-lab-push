import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { BooksComponent } from './books/books.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import { HeaderComponent } from './header/header.component';
import { PotterComponent } from './potter/potter.component';
import { GotComponent } from './got/got.component';
import { BeersComponent } from './beers/beers.component';
import { PotatoesComponent } from './potatoes/potatoes.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductsComponent,
    BooksComponent,
    HeaderItemComponent,
    HeaderComponent,
    PotterComponent,
    GotComponent,
    BeersComponent,
    PotatoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
