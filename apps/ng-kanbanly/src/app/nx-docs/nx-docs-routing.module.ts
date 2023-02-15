import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxDocsComponent } from './nx-docs.component';

const routes: Routes = [{ path: '', component: NxDocsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NxDocsRoutingModule { }
