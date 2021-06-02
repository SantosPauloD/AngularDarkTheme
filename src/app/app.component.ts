import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AppModeService } from './services/app-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public appMode: AppModeService) {}

  toggle({ checked }: MatSlideToggleChange): void {
    this.appMode.setMode(checked);
  }
}
