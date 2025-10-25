import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';

import { SideNav } from './side-nav';

@Component({
  selector: 'app-layout',
  imports: [SideNav, RouterOutlet, MatGridListModule],
  template: `
    <div style="height: 100vh; display: flex; flex-direction: column;">
      <mat-grid-list cols="12" rowHeight="fit" style="flex-grow: 1;">
        <mat-grid-tile [colspan]="12" [rowspan]="1"> Header </mat-grid-tile>
        <mat-grid-tile [colspan]="4" [rowspan]="12">
          Sidebar
          <app-side-nav />
        </mat-grid-tile>
        <mat-grid-tile [colspan]="8" [rowspan]="12">
          Content
          <router-outlet />
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: ``,
})
export class Layout {}
