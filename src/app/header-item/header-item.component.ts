import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { HeaderItem } from './header-item.model';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderItemComponent implements OnInit {
  @Input() url!: string;
  @Input() name!: string;
  @Input() children: HeaderItem[] = [];
  private counter = 0;

  isHighlighted$?: Observable<boolean>;
  isChildHighlighted$?: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isHighlighted$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => {
        const nav = e as NavigationEnd;
        return nav.url === this.url;
      }),
      distinctUntilChanged()
    );

    this.isChildHighlighted$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => {
        const nav = e as NavigationEnd;
        return this.children.map((x) => x.path).includes(nav.url);
      }),
      distinctUntilChanged()
    );
  }

  logDetectionChange() {
    this.counter += 1;
    console.log(this.name, this.counter);
  }
}
