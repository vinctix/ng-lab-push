import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BeersComponent } from './beers/beers.component';
import { BooksComponent } from './books/books.component';
import { GotComponent } from './got/got.component';
import { PotatoesComponent } from './potatoes/potatoes.component';
import { PotterComponent } from './potter/potter.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'books', component: BooksComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'books/potter', component: PotterComponent },
  { path: 'books/got', component: GotComponent },
  { path: 'products/beers', component: BeersComponent },
  { path: 'products/potatoes', component: PotatoesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
