import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NxDocsRoutingModule } from './nx-docs-routing.module';
import { NxDocsComponent } from './nx-docs.component';

@NgModule({
  declarations: [NxDocsComponent],
  imports: [CommonModule, NxDocsRoutingModule],
})
export class NxDocsModule {}
