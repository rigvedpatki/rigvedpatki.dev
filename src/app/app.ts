import { Component, inject } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faApple, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBatteryFull,
  faClock,
  faCodeBranch,
  faFolderOpen,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

import { TerminalContainer } from './components/terminal-container';

@Component({
  selector: 'app-root',
  imports: [TerminalContainer],
  template: `
    <div class="terminal-container">
      <app-terminal-container />
    </div>
  `,
  styles: [
    `
      .terminal-container {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class App {
  fontIconLibrary = inject(FaIconLibrary);
  constructor() {
    this.fontIconLibrary.addIcons(
      faApple,
      faGithub,
      faBatteryFull,
      faClock,
      faFolderOpen,
      faUserCircle,
      faCodeBranch
    );
  }
}
