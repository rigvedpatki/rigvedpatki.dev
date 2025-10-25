import { Component } from '@angular/core';

import { Prompt } from './prompt';

@Component({
  selector: 'app-terminal-container',
  imports: [Prompt],
  template: `
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-[30px] bg-black flex items-center justify-start px-2.5">
        <div class="w-[4%] flex items-center gap-1.5">
          <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-[#27c941]"></div>
        </div>
        <div class="text-center text-sm font-semibold text-white ml-2.5 w-full">
          rigvedpatki.dev
        </div>
      </div>
      <div class="w-full h-full bg-[#1e1e1e]">
        <app-prompt />
      </div>
    </div>
  `,
  styles: ``,
})
export class TerminalContainer {}
