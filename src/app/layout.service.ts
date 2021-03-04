import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    mobileLayout: BehaviorSubject<boolean>

    constructor(
        private breakpointObserver: BreakpointObserver,
    ) {
        this.breakpointObserver.observe([
            Breakpoints.HandsetLandscape,
            Breakpoints.HandsetPortrait
        ]).subscribe(result => {
            if (!this.mobileLayout) {
                this.mobileLayout = new BehaviorSubject<boolean>(result.matches)
            }
            this.mobileLayout.next(result.matches)
        });
    }
}