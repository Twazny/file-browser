import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LayoutService } from './layout.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'file-browser';
  currentPageTitle: string;
  mobileLayout: boolean;
  layoutSubs: Subscription;

  constructor(
    private router: Router,
    private layoutService: LayoutService,
  ) {
    this.layoutSubs = this.layoutService.mobileLayout.subscribe(value => {
      this.mobileLayout = value
    })

    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd)
      )
      .subscribe((event: ActivationEnd) => {
        this.currentPageTitle = event.snapshot.data.title
      })
  }

  ngOnDestroy() {
    this.layoutSubs.unsubscribe()
  }
}
