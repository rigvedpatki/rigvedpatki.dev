import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-prompt',
  imports: [FontAwesomeModule, DatePipe],
  template: `
    <div class="w-full flex flex-row justify-between text-white py-2">
      <div class="flex flex-row">
        <div class="w-6 h-6 bg-[#1e1e1e] relative overflow-hidden">
          <div class="absolute right-0 top-0 w-3 h-6 bg-white rounded-l-full"></div>
        </div>
        <div class="bg-white text-black">
          <fa-icon [icon]="['fab', 'apple']"></fa-icon>
        </div>
        <div class="w-6 h-6 bg-yellow-400 relative overflow-hidden">
          <div class="absolute left-0 top-0 w-3 h-6 bg-white rounded-r-full"></div>
        </div>
        <div class="bg-yellow-400 text-black">
          <fa-icon [icon]="['fas', 'user-circle']"></fa-icon>
          {{ context() }}
        </div>
        <div class="w-6 h-6 bg-blue-400 relative overflow-hidden">
          <div class="absolute left-0 top-0 w-3 h-6 bg-yellow-400 rounded-r-full"></div>
        </div>
        <div class="bg-blue-400">
          <fa-icon [icon]="['fas', 'folder-open']"></fa-icon>
          {{ currentPath() }}
        </div>
        <div class="w-6 h-6 bg-green-400 relative overflow-hidden">
          <div class="absolute left-0 top-0 w-3 h-6 bg-blue-400 rounded-r-full"></div>
        </div>
        <div class="bg-green-400 text-black">
          <fa-icon [icon]="['fab', 'github']"></fa-icon>
          <fa-icon [icon]="['fas', 'code-branch']"></fa-icon>
          {{ currentBranch() }}
        </div>
        <div class="w-6 h-6 bg-[#1e1e1e] relative overflow-hidden">
          <div class="absolute left-0 top-0 w-3 h-6 bg-green-400 rounded-r-full"></div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-6 h-6 bg-[#1e1e1e] relative overflow-hidden">
          <div class="absolute right-0 top-0 w-3 h-6 bg-black rounded-l-full"></div>
        </div>
        <div class="bg-black text-green-400">
          <fa-icon [icon]="['fas', 'battery-full']"></fa-icon>
          {{ batteryLevel() }}%
        </div>
        <div class="w-6 h-6 bg-black relative overflow-hidden">
          <div class="absolute right-0 top-0 w-3 h-6 bg-gray-400 rounded-l-full"></div>
        </div>
        <div class="bg-gray-400 text-black">
          <fa-icon [icon]="['fas', 'clock']"></fa-icon>
          {{ currentTime() | date: 'HH:mm:ss' }}
        </div>
        <div class="w-6 h-6 bg-[#1e1e1e] relative overflow-hidden">
          <div class="absolute left-0 top-0 w-3 h-6 bg-gray-400 rounded-r-full"></div>
        </div>
      </div>
    </div>
    <div></div>
  `,
  styles: ``,
})
export class Prompt {
  protected currentTime = input<Date>(new Date());
  protected user = input<string>('root');
  protected hostname = input<string>('rigvedpatki.dev');
  protected context = computed(() => `${this.user()}@${this.hostname()}`);
  protected currentPath = input<string>('~');
  protected currentBranch = input<string>('main');
  protected batteryLevel = input<number>(100);
}
