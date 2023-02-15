import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./board/board.module').then(m => m.BoardModule) },
  { path: 'nx-docs', loadChildren: () => import('./nx-docs/nx-docs.module').then(m => m.NxDocsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
