import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LazyComponent} from './lazy/lazy.component';

@Component({
  selector: 'app-root',
  imports: [ LazyComponent],
  styleUrl: './app.component.css',
  template: `
    <div></div>
    @defer (on hover) {
        <app-lazy/>
    } @placeholder{
        <div>Platzhalter</div>
    }


`
})
export class AppComponent {
  title = 'lv-modern-angular';
}
