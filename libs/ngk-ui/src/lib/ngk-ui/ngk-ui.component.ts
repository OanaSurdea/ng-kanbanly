import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-kanbanly-ngk-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngk-ui.component.html',
  styleUrls: ['./ngk-ui.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgkUiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
