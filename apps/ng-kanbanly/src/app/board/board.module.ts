import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';


@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    TuiButtonModule,
  ]
})
export class BoardModule { }
