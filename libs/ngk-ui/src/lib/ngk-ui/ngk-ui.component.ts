import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-kanbanly-ngk-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngk-ui.component.html',
  styleUrls: ['./ngk-ui.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgkUiComponent {}
