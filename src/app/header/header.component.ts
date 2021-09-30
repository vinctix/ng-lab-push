import { Component, OnInit } from '@angular/core';
import { HeaderItem } from '../header-item/header-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  model?: HeaderItem[];

  constructor() { }

  ngOnInit(): void {
    this.model = [
      { path: '/admin', name: 'admin', children: []},
      { path: '/books', name: 'books', children: [
        { path: '/books/got', name: 'game of thrones', children: [] },
        { path: '/books/potter', name: 'harry potter', children: [] }
      ]},
      { path: '/products', name: 'products', children: [
        { path: '/products/beers', name: 'beers', children: [] },
        { path: '/products/potatoes', name: 'Potatoes !', children: [] }
      ]}
    ];
  }

}
