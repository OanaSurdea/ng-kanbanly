import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NxWelcomeComponent } from '../nx-welcome.component';
import { NxDocsRoutingModule } from './nx-docs-routing.module';
import { NxDocsComponent } from './nx-docs.component';


@NgModule({
  declarations: [
    NxDocsComponent,
    NxWelcomeComponent
  ],
  imports: [
    CommonModule,
    NxDocsRoutingModule
  ]
})
export class NxDocsModule { }
