import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-browser';
  currentPageTitle: string;
  mobileLayout = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute
  ) {
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.mobileLayout = result.matches
    });

    this.route.data.subscribe(data => {
      console.log(data)
      this.currentPageTitle = data.title
    })
  }
}
