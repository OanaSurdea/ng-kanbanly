import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiScrollbarModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiInputModule, TuiTilesModule } from '@taiga-ui/kit';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [BoardComponent, TaskComponent, ColumnComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,

    // Angular
    FormsModule,

    // Taiga
    TuiButtonModule,
    TuiDialogModule,
    TuiInputModule,
    TuiTilesModule,
    TuiScrollbarModule,
    TuiSvgModule,

    // Cdk
    DragDropModule,
  ],
  exports: [BoardComponent, TuiTilesModule, TuiSvgModule],
})
export class BoardModule {}
