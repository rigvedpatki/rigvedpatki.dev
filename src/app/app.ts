import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'rig-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('rigvedpatki.dev');
}
