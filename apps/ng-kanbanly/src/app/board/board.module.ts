import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  TuiButtonModule,
  TuiScrollbarModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiTilesModule } from '@taiga-ui/kit';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [BoardComponent, TaskComponent, ColumnComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    TuiSvgModule,
    // tuiIconDrag
    TuiButtonModule,
    TuiTilesModule,
    TuiScrollbarModule,
    DragDropModule,
  ],
  exports: [BoardComponent, TuiTilesModule, TuiSvgModule],
})
export class BoardModule {}
